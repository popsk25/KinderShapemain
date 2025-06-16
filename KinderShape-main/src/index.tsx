import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FrameScreen } from "./screens/FrameScreen/FrameScreen";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <FrameScreen />
    </BrowserRouter>
  </StrictMode>,
);
