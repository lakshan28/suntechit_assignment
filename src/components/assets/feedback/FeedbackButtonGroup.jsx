/**
 * @author Uvindu Sanjana
 */

import React from "react";
import FeedbackButton from "./FeedbackButton";

const FeedbackButtonGroup = ({ classes }) => {
  const [active, setActive] = React.useState(0);

  const values = [
    { id: 1, text: "1 - Very Unsatisfied" },
    { id: 2, text: "2 - Unsatisfied" },
    { id: 3, text: "3 - Neutral" },
    { id: 4, text: "4 - Satisfied" },
    { id: 5, text: "5 - Very Satisfied" }
  ];

  return values.map(value => (
    <FeedbackButton
      key={value.id}
      classes={classes}
      active={active}
      setActive={setActive}
      value={value}
    />
  ));
};

export default FeedbackButtonGroup;
