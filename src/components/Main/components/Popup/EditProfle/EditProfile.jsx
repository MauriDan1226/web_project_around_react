const EditProfile = () => {
  return (
    <form id="edit-profile-form" class="popup__form" novalidate>
      <input
        type="text"
        className="popup__input"
        id="input-name"
        name="name"
        placeholder="Nombre"
        minlength="2"
        maxlength="40"
        required
      />

      <span className="form__input_type_error input-name-error"></span>

      <input
        type="text"
        className="popup__input"
        id="input-hobbie"
        name="job"
        placeholder="Acerca de mi"
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

export default EditProfile;
