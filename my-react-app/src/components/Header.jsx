import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <h1>
        K
        <svg
          width="36"
          height="36"
          viewBox="0 0 47 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.0322 35.8419V48.4414L37.3731 45.2915V32.6921L32.0322 35.8419Z"
            fill="#FF6060"
          />
          <path
            d="M46.7658 20.4632L24.8496 7.67844L12.6944 0.637573L0.723389 21.5749L0.907555 41.2152L22.6396 54L24.8496 52.703V34.1744L34.6106 16.9428L44.5557 22.6866V41.2152L46.7658 39.9182V20.4632Z"
            fill="#FF6060"
          />
        </svg>
        sa
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
