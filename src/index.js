import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/auth";
import { DarkModeProvider } from "./context/darkMode";
import { FullScreenProvider } from "./context/fullScreen";
import { MenuSizeProvider } from "./context/menuSize";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MenuSizeProvider>
        <FullScreenProvider>
          <DarkModeProvider>
            <App />
          </DarkModeProvider>
        </FullScreenProvider>
      </MenuSizeProvider>
    </AuthProvider>
  </React.StrictMode>
);
