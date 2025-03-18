import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Logement.scss";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";
import SvgLeft from "../components/Svg/SvgLeft.jsx";
import SvgRight from "../components/Svg/SvgRight.jsx";
import SvgFilledStar from "../components/Svg/SvgFilledStar.jsx";
import SvgEmptyStar from "../components/Svg/SvgEmptyStar.jsx";
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

  if (!logement) {
    return <div>Chargement...</div>;
  }

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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? <SvgFilledStar key={i} /> : <SvgEmptyStar key={i} />
      );
    }
    return stars;
  };

  return (
    <div>
      <Header />
      <main className="logement">
        <div className="wrapper">
          {logement.pictures.length > 1 && (
            <button onClick={handlePrevClick}>
              <SvgLeft />
            </button>
          )}
          <img
            src={logement.pictures[currentImageIndex]}
            alt={`Logement ${currentImageIndex + 1}`}
          />
          {logement.pictures.length > 1 && (
            <div className="image-counter">
              {currentImageIndex + 1}/{logement.pictures.length}
            </div>
          )}
          {logement.pictures.length > 1 && (
            <button onClick={handleNextClick}>
              <SvgRight />
            </button>
          )}
        </div>
        <div className="logement-infos">
          <div className="logement-title-and-tags">
            <div className="logement-title">
              <h2>{logement.title}</h2>
              <p>{logement.location}</p>
            </div>
            <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="logement-host-and-rating">
            <div className="logement-host">
              <span>{logement.host.name}</span>
              <img src={logement.host.picture} alt={logement.host.name}></img>
            </div>
            <div className="logement-rating">
              {renderStars(logement.rating)}
            </div>
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
      <Footer />
    </div>
  );
}

export default Logement;
