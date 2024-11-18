import React from 'react';

const Contacto = () => {
  return (
    <div className="container bg-contacto my-5">
      <div className="row justify-content-center">
    
      
        <div className="col-12 video-fullwidth">
          <div className="text-center">
            <h2 className="mt-3 mb-4 text-uala">
              Conoce más sobre nosotros y cómo estamos trabajando para ofrecerte los mejores servicios financieros.
            </h2>
            <video autoPlay loop muted className="w-100 rounded">
              <source src="/MX_Thumbnail_SomosUala_desktop.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>

      
        <div className="col-12 contSecond">
          <div className="card noneHover p-4">
            <div className="row align-items-center">
           
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <div className="text-center">
                  <video autoPlay loop muted className="w-100 rounded">
                    <source src="/MX_Home_Atencion_Chat.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
              </div>

       
              <div className="col-12 col-md-6">
                <h3 className="mt-3 text-uala acent">
                  Comunícate con nosotros directamente a través de nuestro chat en línea <br/> para resolver tus dudas.
                </h3>
                <div className="contact-info mt-4">
                  <ul className="list-unstyled text-uala">
                    <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                    <li><i className="fas fa-envelope"></i> contacto@uala.com</li>
                    <li><i className="fas fa-map-marker-alt"></i> Av. Siempre Viva 123, CDMX, México</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacto;
