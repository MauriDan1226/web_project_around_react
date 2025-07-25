const NewCard = () => {
  return (
    <form id="edit-profile-form" className="popup__form" noValidate>
      <input
        type="text"
        className="popup__input"
        id="add-title"
        name="title"
        placeholder="Titulo"
        minlength="2"
        maxlength="30"
        required
      />

      <span class="form__input_type_error add-title-error"></span>

      <input
        type="url"
        className="popup__input"
        id="add-image"
        name="name"
        placeholder="Enlace a la imagen"
        minlength="2"
        maxlength="200"
        required
      />

      <span className="form__input_type_error input-hobbie-error"></span>

      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
};

export default NewCard;
