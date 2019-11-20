import React from "react";

import PropTypes from "prop-types";
import "./TextField.css";

const TextField = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="textbox">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        //  value={value}
        //  onChange={onChange}
        //  disabled={disabled}
      />
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  //value: PropTypes.string.isRequired,

  type: PropTypes.string.isRequired
  // onChange: PropTypes.func.isRequired,
  // disabled: PropTypes.string
};

TextField.defaultProps = {
  type: "text"
};

export default TextField;
