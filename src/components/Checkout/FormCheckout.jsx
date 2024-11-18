import React from 'react'

const FormCheckout = ({dataForm,handleChangeInput, handleSubmitForm}) => {
  return (
    <div>
       <form onSubmit={handleSubmitForm}>
        <label>Nombre completo</label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}></input>

        <label>Telefono</label>
        <input type="tel" name="phone" value={dataForm.phone} onChange={handleChangeInput}></input>

        <label>Email</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}></input>

        <label>Confirmar Email</label>
        <input type="email" name="confirmEmail"  value={dataForm.confirmEmail}  onChange={handleChangeInput} required
        />

        <button type="submit">Enviar mi orden</button>

      </form>
    </div>
  )
}

export default FormCheckout
