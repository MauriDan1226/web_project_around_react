import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const currentUser = useContext(CurrentUserContext); // Obtiene el objeto currentUser

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const EditProfile = () => {
    return (
      <form id="edit-profile-form" class="popup__form" novalidate>
        <input
          className="popup__input"
          id="input-name"
          maxLength="40"
          minLength="2"
          name="userName"
          placeholder="Nombre"
          required
          type="text"
          value={name} // Vincula name con la entrada
          onChange={handleNameChange} // Agrega el controlador onChange
        />

        <span className="form__input_type_error input-name-error"></span>

        <input
          className="popup__input"
          id="input-hobbie"
          maxLength="200"
          minLength="2"
          name="userDescription"
          placeholder="Acerca de mí"
          required
          type="text"
          value={description} // Vincula description con la entrada
          onChange={handleDescriptionChange} // Agrega el controlador onChange
        />

        <span className="form__input_type_error input-hobbie-error"></span>

        <button type="submit" className="popup__button">
          Guardar
        </button>
      </form>
    );
  };
}

/* export default EditProfile; */
