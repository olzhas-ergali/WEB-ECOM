import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'semantic-ui-css/semantic.min.css'
// import counter from "./components/counterReducer";
// import auth from "./components/authReducer";
// import { combineReducers } from "redux";

// import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
// export default allReducers;