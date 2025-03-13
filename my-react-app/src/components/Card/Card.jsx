import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ title, imageUrl, id }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
};

export default Card;
