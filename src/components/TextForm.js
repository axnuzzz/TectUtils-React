import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("UPPERCASE btn was clicked" + text);
    let newText = text.toUpperCase(text);
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("lowercase btn was clicked" + text);
    let newText = text.toLowerCase(text);
    setText(newText);
  };
  const handleClearClick = () => {
    const y = window.confirm("Are you sure you want to clear text?");
    // console.log(y);
    if (y === true) {
      setText(" ");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#121f40",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-secondary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>{text === "" ? 0 : text.split(" ").length}</b> words and{" "}
          <b>{text.length}</b> characters
        </p>
        <p>
          This is a {0.0042 * (text === "" ? 0 : text.split(" ").length)}{" "}
          minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text to preview it here"}</p>
      </div>
    </>
  );
}
