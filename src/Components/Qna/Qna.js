import React from "react";
import "./Qna.css";

const Qna = () => {
  return (
    <div className="container ">
      <div className="bg">
        <h1>Questions and answer</h1>
        <div className="qna">
          <h2>how dose react works?</h2>
          <p>
            React internally creates, updates, and destroys instances to figure
            out the DOM elements tree that needs to be rendered to the browser.
            When working with class components, it's common to refer to their
            browser-rendered DOM elements as component instances. You can render
            many instances of the same component.
          </p>
        </div>

        <div className="qna">
          <h2>how useState works?</h2>
          <p>
            useState is a hook that allows you to have state variables in
            functional elements. You pass the initial state to this function and
            provides a variable with the value of the current state (not the
            initial state) and another function to update this value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qna;
