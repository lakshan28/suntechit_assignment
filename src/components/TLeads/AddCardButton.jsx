import React from "react";
import { Card, CardContent } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
export default function AddCardButton({ handleLead }) {
  return (
    <Card style={{ width: "280px", borderRadius: "0.8rem" }}>
      <CardContent style={{ textAlign: "center" }}>
        <AddCircleOutlineIcon
          style={{
            fontSize: "3rem",
            cursor: "pointer",
            color: "#959595"
          }}
          onClick={handleLead}
        />
      </CardContent>
    </Card>
  );
}
