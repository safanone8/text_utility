import React, { useState } from "react"; // useState is a hook

export default function TestForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been Converted to uppercase", "success");
  };

  const handleClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been Converted to lowercase", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been Copied to Clipboad", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed", "success");
  };

  // lets you change/update the text in the textbox
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  

  

  const [text, setText] = useState(""); //keep it in mind
  // text = "new text"; wrong way to update text
  // setText("new text"); right way to update text

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "seashell" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* value is linked with the setText */}
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "seashell" : "#6699CC",
              color: props.mode === "light" ? "black" : "seashell",
            }}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
            placeholder="Enter your text here">
          </textarea>
        </div>
        <div
          className="container"
          style={{ color: props.mode === "light" ? "black" : "seashell" }}>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}>
            Convert To UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowClick}>
            Convert To LowerCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClick}>
            Clear text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}>
            Copy text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "seashell" }}>
        <h1>Your text summery</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}

