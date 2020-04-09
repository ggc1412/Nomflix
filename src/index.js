import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App"; //.env에 설정했기에 이렇게도 접근 가능

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
