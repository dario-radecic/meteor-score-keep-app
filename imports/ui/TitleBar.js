import React from "react";

const TitleBar = (props) => (
  <div className="title-bar">
    <div className="wrapper">
      <h1>{props.title}</h1>
      <h2 className="title-bar__subtitle">{props.subtitle}</h2>
    </div>
  </div>
);

export default TitleBar;