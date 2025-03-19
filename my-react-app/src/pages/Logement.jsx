// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Logement.scss";
import Wrapper from "../components/Wrapper/Wrapper.jsx";
import Tags from "../components/Tags/Tags.jsx";
import Rating from "../components/Rating/Rating.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch("../data/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((item) => item.id === id);
        setLogement(foundLogement);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, [id]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!logement) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <main className="logement">
        <Wrapper
          pictures={logement.pictures}
          currentImageIndex={currentImageIndex}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        <div className="logement-infos">
          <div className="logement-title-and-tags">
            <div className="logement-title">
              <h2>{logement.title}</h2>
              <p>{logement.location}</p>
            </div>
            <Tags tags={logement.tags} />
          </div>
          <div className="logement-host-and-rating">
            <div className="logement-host">
              <span>{logement.host.name}</span>
              <img src={logement.host.picture} alt={logement.host.name}></img>
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="logement-collapse">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
    </div>
  );
}

export default Logement;
