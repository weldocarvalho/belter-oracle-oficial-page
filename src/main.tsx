import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { ZionSkincarePage } from "./zion/ZionSkincarePage";
import { GoakTechPage } from "./goak/GoakTechPage";
import { PrivacyPolicyPage } from "./legal/PrivacyPolicyPage";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/zion-skincare" element={<ZionSkincarePage />} />
        <Route path="/goak-tech" element={<GoakTechPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
