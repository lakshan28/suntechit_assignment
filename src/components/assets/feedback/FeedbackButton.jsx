/**
 * @author Uvindu Sanjana
 */

import React from "react";

const FeedbackButton = ({ classes, value, active, setActive }) => {
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    value.id === active ? setSelected(active) : setSelected(0);
  }, [active, value.id]);

  return (
    <div
      className={classes.feedbackButtonWrapper}
      style={
        selected
          ? { backgroundColor: "#56aea0" }
          : { backgroundColor: "#4cf0d5" }
      }
      onClick={() => setActive(value.id)}
    >
      <div
        className={
          selected ? classes.feedbackButtonActive : classes.feedbackButton
        }
        onClick={() => setActive(value.id)}
      >
        {value.text}
      </div>
      {selected ? (
        <span>SELECTED</span>
      ) : (
        <span style={{ marginRight: "0.5rem" }}>SELECT</span>
      )}
    </div>
  );
};

export default FeedbackButton;
