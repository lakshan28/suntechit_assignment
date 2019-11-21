import React from "react";
import "./Button.css";
import { MdReorder, MdEdit } from "react-icons/md";
import { AiOutlineLine } from "react-icons/ai";
const Button = ({ name, iconname }) => {
  return (
    <div>
      <button className="button">
        ( {iconname}={<iconname />}){name}
      </button>
    </div>
  );
};

export default Button;
