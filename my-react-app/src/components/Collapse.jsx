import React from "react";
import { useState } from "react";
import { SvgUp, SvgDown} from "./Svg";
import "./Collapse.scss";
import "./Svg.scss";


const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <span>{isOpen ? <SvgDown></SvgDown> : <SvgUp></SvgUp>}</span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;