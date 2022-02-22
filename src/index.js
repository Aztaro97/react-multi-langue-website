import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import LoaderComponent from "./components/Loader";
import "./translations/i18next";
// import "flag-icon-css/css/flag-icon.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <Suspense fallback={<LoaderComponent />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
