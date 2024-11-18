import React from 'react';

const Beneficios = () => {
  return (
    <div className="container my-3">
      <h2 className="text-center mb-4 text-uala acent">Conoce nuestros Beneficios</h2>
      <div className="row gy-4 text-center">
        <div className="col-12 col-md-4">
          <img
            src="/MX_UalaMas_Home_img_1.webp"
            alt="Beneficio 1"
            className="img-fluid rounded"
          />
          <p className="mt-3 text-cta">
            Accede a promociones exclusivas con nuestra tarjeta digital.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            src="/MX_UalaMas_Home_img_3.webp"
            alt="Beneficio 2"
            className="img-fluid rounded"
          />
          <p className="mt-3 text-cta">
            Realiza transacciones rápidas y seguras desde cualquier lugar.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            src="/MX_Ualamas_img_1.webp"
            alt="Beneficio 3"
            className="img-fluid rounded"
          />
          <p className="mt-3 text-cta">
            Disfruta de un soporte al cliente dedicado, disponible las 24 horas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
