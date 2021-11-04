import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="custom-footer bg-dark text-white mt-4 text-center">
        <Container className="p-2 text-center ">
          <h6 className="p-3"><a className="text-light" href="https://www.facebook.com/" target="blank"><FaFacebookF/></a><a className="text-light" href="https://www.instagram.com/clubdecocineroscomo/?hl=es" target="blank"><FaInstagram/></a></h6>
          
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
