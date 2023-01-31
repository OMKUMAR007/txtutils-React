import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log(" upper clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "success");
  };
  const handleLpclick = () => {
    console.log(" lower clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase", "success");
  };
  const handleclearclick = () => {
    console.log(" clear clicked");
    let newText = "";
    setText(newText);
    props.showAlert("text cleared ", "success");
  };
  const handlersclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toggle = document.getElementById("toggle");
    if (toggle.textContent === "Read Aloud") {
      toggle.innerHTML = "Stop";

      props.showAlert("read aloud started", "success");
    } else {
      props.showAlert("read aloud stoped", "success");
      toggle.innerHTML = "Read Aloud";

      if ((toggle.innerHTML = "Read Aloud")) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
    console.log("clickedm handeld");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 className="text-center">{props.heading}</h1>
        <div className="mb-3 container ">
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "#333333" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>

          <button
            className=" btn btn-primary mx-1 my-1 "
            onClick={handleUpclick}
          >
            convert to UpperCase
          </button>
          <button className=" btn btn-dark mx-1 my-1" onClick={handleLpclick}>
            convert to LowerCase
          </button>

          <button className=" btn btn-info mx-1 my-1" onClick={handlersclick}>
            Remove Space
          </button>
          <button
            className=" btn btn-danger mx-1 my-1 "
            onClick={handleclearclick}
          >
            Clear
          </button>
          <button
            type="submit"
            onClick={speak}
            className="btn btn-warning mx-1 my-1"
            id="toggle"
          >
            Read Aloud
          </button>

          <div className="container my-3">
            <h2>Your text summary is here ..</h2>
            <p>
              <b> {text.length > 0 ? text.trim().split(" ").length : 0} </b>
              words,
              <b> {text.replace(/\s+/g, "").length} </b>characters
            </p>
            <p>
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
              minutes reading time
            </p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to preview !!"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
