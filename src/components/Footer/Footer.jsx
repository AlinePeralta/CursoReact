import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-marca text-white py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 mb-3">
            <a href="https://github.com/AlinePeralta" target="_blank" rel="noreferrer" className="text-white me-3">
              GitHub
            </a>
            |
            <a href="https://www.linkedin.com/in/aline-peralta-008957109/" target="_blank" rel="noreferrer" className="text-white ms-3">
              LinkedIn
            </a>
          </div>
          <div className="col-12">
            <p className="mb-0">© {new Date().getFullYear()} Aline Peralta</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
