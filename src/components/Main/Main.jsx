import { useState } from "react";
import lapiz from "../../../src/Images/vectorLapiz.png";
import add from "../../../src/Images/Vector+.png";
import avatar from "../../../src/Images/image.jpg";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard.jsx";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar.jsx";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup.jsx";
import EditProfile from "./components/Popup/EditProfle/EditProfile.jsx";
import Card from "./components/Card/Card.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatar = { title: "Editar Avatar", children: <EditAvatar /> };
  const editProfile = { title: "Editar Perfil", children: <EditProfile /> };
  const imagePopup = { title: "Imagen grande", children: <ImagePopup /> };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <main className="start">
      <section className="profile">
        <img
          src={avatar}
          alt="Around the U.S logo"
          className="profile__image"
        />

        <div className="profile__information">
          <h1 className="profile__user">Jacques Cousteau</h1>
          <p className="profile__description">Explorador</p>
        </div>
        <button className="profile__edition">
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
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
        <div className="cards"></div>
        <p className="ejemplo"></p>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
