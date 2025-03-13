import React from "react";
import { useState } from "react";
import SvgDown from "../Svg/SvgDown.jsx";
import SvgUp from "../Svg/SvgUp.jsx";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <span>{isOpen ? <SvgDown /> : <SvgUp />}</span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
