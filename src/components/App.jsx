import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { useState, useEffect } from "react";
import { api } from "../utils/api.js";

export default function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((user) => {
        setCurrentUser(user);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    api
      .updateAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .catch((error) => console.error("Error al actualizar el avatar:", error));
  };

  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };
  const handleClosePopup = () => {
    setPopup(null);
  };
  const hola = () => {
    console.log("hola desdel contexto");
  };
  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, hola, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
