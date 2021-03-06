import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.Loader}>
      <div className={classes.Ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loader;
