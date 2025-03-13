// @ts-nocheck
import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Card from "../components//Card/Card.jsx";
import { useEffect, useState } from "react";
import "./Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("../data/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);

  return (
    <div>
      <Header />
      <main className="home">
        <div className="home-banner">
          <img
            src="../assets/images/bord-de-mer.webp"
            alt="Photo du bord de mer"
          />
          <p>Chez vous, partout et ailleurs</p>
        </div>
        <div className="cards-container">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              imageUrl={logement.cover}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
