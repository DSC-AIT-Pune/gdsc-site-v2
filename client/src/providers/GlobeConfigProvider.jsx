import React from "react";
import { GlobeConfig } from "../context";
import light from "../assets/globe/light.png";

function GlobeConfigProvider({ children }) {
  const [config, setConfig] = React.useState({
    mode: "dark",
    image: "https://unpkg.com/three-globe@2.24.8/example/img/earth-dark.jpg",
    pixel: "#fff",
  });

  const toggleConfig = (newConfig) => {
    setConfig(newConfig);
  };

  return (
    <GlobeConfig.Provider value={{ config, toggleConfig }}>
      {children}
    </GlobeConfig.Provider>
  );
}

export default GlobeConfigProvider;
