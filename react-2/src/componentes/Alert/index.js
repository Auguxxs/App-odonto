import React from "react";
import "./Alert.css";

function Alert(props) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>Ups!</strong> Algo salio mal, por favor vuelve a intentarlo
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={props.alertSwitch}
      ></button>
    </div>
  );
}
export default Alert;
