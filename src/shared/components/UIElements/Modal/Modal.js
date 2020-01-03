import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
const Modal = props => {
  const content = (
    <div
      className="modal"
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
    >
      {props.children}
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default Modal;
