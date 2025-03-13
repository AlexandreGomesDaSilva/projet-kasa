import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./NotFound.scss";

function NotFound() {
  return (
    <div>
      <Header />
      <div className="not-found">
        <span>404</span>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
