import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="logement-tags">
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};

export default Tags;
