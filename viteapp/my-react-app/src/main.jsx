import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Counter from "./Counter.jsx";
import Welcome from "./Welcome.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome />
    <App />
    <Counter />
    <Welcome />
  </StrictMode>,
);
