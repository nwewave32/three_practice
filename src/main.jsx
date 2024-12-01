import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./pages/main";
import "./reset.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div id="canvas-container">
      <Main />
    </div>
  </StrictMode>
);
