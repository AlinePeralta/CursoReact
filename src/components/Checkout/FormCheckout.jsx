import React from 'react';

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0 textForm">
          <div className="text-center">
            <img
              src="../../public/ilus-ly-copa.webp"
              alt="Carrito vacío"
              className="img-fluid mb-4 cartEmptyImg"
            />
            <h2 className="text-uala acent">¡Llena tus datos para completar tu compra!</h2>
            <p>Rellena el formulario para procesar tu orden de manera rápida y segura.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-4 shadow-sm noneHover">
            <h3 className="text-center mb-4 text-uala pt-4">Formulario de Compra</h3>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Nombre completo</label>
                <input type="text" id="fullname" name="fullname" className="form-control" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Nombre completo" required />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="tel" id="phone" name="phone" className="form-control" value={dataForm.phone} onChange={handleChangeInput} placeholder="Número de teléfono" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-control" value={dataForm.email} onChange={handleChangeInput} placeholder="Email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmEmail" className="form-label">Confirmar Email</label>
                <input type="email" id="confirmEmail" name="confirmEmail" className="form-control" value={dataForm.confirmEmail} onChange={handleChangeInput} placeholder="Confirma tu email" required />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-uala w-100 mt-4 mb-4">
                  Enviar mi orden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCheckout;
