import { GlobeConfigProvider, ThemeProvider } from "./providers";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobeConfigProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GlobeConfigProvider>
  </React.StrictMode>
);
