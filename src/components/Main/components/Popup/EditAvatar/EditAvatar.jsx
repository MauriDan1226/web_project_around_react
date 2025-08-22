const EditAvatar = () => {
  const avatarRef = useRef(null);
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateAvatar({ avatar: avatarRef.current.value }); //  Enviar nuevo avatar
    onClose(); //  Cerrar popup después de actualizar
  };

  return (
    <form
      className="popupform"
      name="avatar-form"
      onSubmit={handleSubmit}
      id="edit-avatar-form"
      noValidate
    >
      <label className="popupfield">
        <input
          type="url"
          name="avatar"
          id="owner-avatar"
          className="popupinput popupinput_type_url"
          placeholder="Image link"
          required
          ref={avatarRef}
        />
        <span className="popuperror" id="owner-avatar-error"></span>
      </label>
      <button type="submit" className="button popupbutton">
        Guardar
      </button>
    </form>
  );
};

export default EditAvatar;
