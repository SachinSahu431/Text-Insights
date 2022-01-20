import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h1 className="my-3">About</h1>
      <p>
        'Text Insights' is a collection of useful text processing utilities. All
        text tools are simple and easy to use that work right in your browser.
        And all utilities work exactly the same way — load text and get result!
        <br />
      </p>
      <h3>Features</h3>
      <p>
        Here's a list of free tools to help you with your daily tasks. Check the
        current features below and feel free to recommend a new feature from the
        feedback section.
      </p>
      <div
        className="accordion"
        id="accordionExample"
        style={{ border: "solid 3px #DF7D7D", borderRadius: "6px" }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={{
                backgroundColor: props.mode === "light" ? "#d3e0e9" : "#061124",
                color: props.mode === "light" ? "#061124" : "white",
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Convert to Uppercase/Lowercase
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse hide"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "#d3e0e9" : "#061124",
                color: props.mode === "light" ? "#061124" : "white",
              }}
            >
              <strong>Uppercase/Lowercase converter</strong> <br /> With this
              tool, you can convert all letters of input text, regardless of
              their initial case, into uppercase or lowercase.
              <br />
              Here, implementation of <code>.toUpperCase()</code> is used to get
              the work done!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "light" ? "#d3e0e9" : "#061124",
                color: props.mode === "light" ? "#061124" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Base64 : Encode/Decode
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "#d3e0e9" : "#061124",
                color: props.mode === "light" ? "#061124" : "white",
              }}
            >
              <strong>Base64</strong> encoding schemes are commonly used when
              there is a need to encode binary data that needs to be stored and
              transferred over media that are designed to deal with ASCII.
              <br />
              Function <code>btoa()</code> is used for encoding to Base64. And{" "}
              <code>atob()</code> is used for decoding Base64.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "light" ? "#d3e0e9" : "#061124",
                color: props.mode === "light" ? "#061124" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Text-To-Speech
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "#d3e0e9" : "#061124",
                color: props.mode === "light" ? "#061124" : "white",
              }}
            >
              <strong>Text-to-speech (TTS)</strong> a.k.a “read aloud”
              technology reads aloud digital text — the words on computers,
              smartphones, and tablets. TTS can help people who struggle with
              reading.
              <br />
              <br />
              Web Speech API is used to add speech synthesis to JavaScript.
              <br />
              The SpeechSynthesisUtterance interface of this API represents a
              speech request. <br />
              <code>var msg = new SpeechSynthesisUtterance(text);</code>
              <br />
              SpeechSynthesis interface is used for controlling a text-to-speech
              output. <br />
              <code> window.speechSynthesis.speak(msg)</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: props.mode === "light" ? "#d3e0e9" : "#061124",
                color: props.mode === "light" ? "#061124" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Text Summary
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "#d3e0e9" : "#061124",
                color: props.mode === "light" ? "#061124" : "white",
              }}
            >
              <strong>Text Summary</strong> includes some features like word
              count, character count and approx. reading time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
