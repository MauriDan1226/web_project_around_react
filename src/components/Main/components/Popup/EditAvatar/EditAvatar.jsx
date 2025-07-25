const EditAvatar = () => {
    return ( <form className='popupform' name='avatar-form' id='edit-avatar-form' noValidate>
      <label className='popupfield'>
        <input
          type='url'
          name='avatar'
          id='owner-avatar'
          className='popupinput popupinput_type_url'
          placeholder='Image link'
          required
        />
        <span className='popuperror' id='owner-avatar-error'></span>
      </label>
      <button type='submit' className='button popupbutton'>
        Salvar
      </button>
    </form>



 );
}
 
export default EditAvatar;