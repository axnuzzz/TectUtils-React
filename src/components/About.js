import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable DARK mode");

  const [btnType, setbtnType] = useState("btn btn-outline-dark");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable DARK mode");
      setbtnType("btn btn-outline-dark");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable LIGHT mode");
      setbtnType("btn btn-outline-light");
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <div className="card" style={myStyle}>
          <img
            src="src\components\TextUtilsImg.png"
            className="card-img-top"
            alt=""
          />

          <div className="card-body">
            <h1 className="card-title">ABOUT</h1>
            <p className="card-text" style={myStyle}>
              This is a utility website made by me to convert text into various
              cases
            </p>
            <button className={btnType} onClick={toggleStyle}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
