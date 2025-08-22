import { useContext, useState } from "react";
import lapiz from "../../../src/Images/vectorLapiz.png";
import add from "../../../src/Images/Vector+.png";
import avatar from "../../../src/Images/image.jpg";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard.jsx";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar.jsx";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup.jsx";
import EditProfile from "./components/Popup/EditProfle/EditProfile.jsx";
import Card from "./components/Card/Card.jsx";
import { useEffect } from "react";
import { api } from "../../utils/api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

export default function Main({ onOpenPopup, onClosePopup, popup }) {
  console.log(onClosePopup);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatar = { title: "Editar Avatar", children: <EditAvatar /> };
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const imagePopup = { title: "Imagen grande", children: <ImagePopup /> };
  const [cards, setCards] = useState([]);
  const { currentUser, handleUpdateUser, hola } =
    useContext(CurrentUserContext);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const temCards = await api.getInitialCards();
        setCards(temCards);
        console.log(temCards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCards();
  }, []);

  async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;

    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api.deleteCard(card._id).then(() => {
      setCards((prevCards) => prevCards.filter((c) => c._id !== card._id));
    });
  }

  return (
    <main className="start">
      <section className="profile">
        <div className="profile__avatar">
          <img
            src={currentUser.avatar}
            alt="{currentUser.name}"
            className="profile__avatar-img"
          />
          <button
            className="profile__avatar-edit"
            onClick={() => {
              onOpenPopup(imagePopup);
            }}
          ></button>
        </div>
        <div className="profile__information">
          <h1 className="profile__user">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__edition"
          onClick={() => {
            onOpenPopup(editProfile);
          }}
        >
          <img
            src={lapiz}
            alt="Around the U.S logo"
            className="logo header__logo"
          />
        </button>
        <button
          aria-label="Add card"
          className="profile__post"
          type="button"
          onClick={() => {
            handleOpenPopup(newCardPopup);
          }}
        >
          <img
            src={add}
            alt="Around the U.S logo"
            className="logo header__logo"
          />
        </button>
      </section>

      <section className="gallery">
        <div className="cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </div>
        <p className="ejemplo"></p>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
