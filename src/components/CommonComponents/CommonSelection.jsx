import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: "4rem",
    position: "relative",
    // backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    backgroundColor: "transparent",
    fontSize: "0.9rem",
    padding: "0.4rem 0.8rem 0.4rem 1rem",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: "4rem",
      outline: "none"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0)
  }
}));

export default function CommonSelection(props) {
  const { value, onChange, arrata2: arrata1 } = props;
  const classes = useStyles();

  return (
    <div style={{ marginTop: "1rem" }}>
      <FormControl id="1" className={classes.margin}>
        {/* <Grid item xs={4} style={{ textAlign: "left" }}> */}
        <NativeSelect
          id="1"
          value={value}
          onChange={onChange}
          input={<BootstrapInput />}
          // .MuiNativeSelect-select.MuiNativeSelect-select - overddie matirial ui css
          style={{ width: "6rem" }}
          labelStyle={{ color: "black" }}
        >
          {arrata1.map(arrr => (
            <option value={arrr}>{arrr}</option>
          ))}
        </NativeSelect>
        {/* </Grid> */}
      </FormControl>
    </div>
  );
}
