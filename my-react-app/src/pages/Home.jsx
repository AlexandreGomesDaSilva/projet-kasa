// @ts-nocheck
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card.jsx";
import "./Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    fetch("../data/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 740);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <main className="home">
        <div className="home-banner">
          <img
            src="../assets/images/bord-de-mer.webp"
            alt="Photo du bord de mer"
          />
          <p>
            {isMobile ? (
              <>
                Chez vous, <br />
                partout et ailleurs
              </>
            ) : (
              "Chez vous, partout et ailleurs"
            )}
          </p>
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
    </div>
  );
}

export default Home;
