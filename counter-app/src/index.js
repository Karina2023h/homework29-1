// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

// Створюємо кореневий вузол для React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендеримо компонент App
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
