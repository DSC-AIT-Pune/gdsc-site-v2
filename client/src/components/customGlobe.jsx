import React from "react";
import { useEffect, useState, useRef, useCallback, useContext } from "react";
import { COUNTRIES_DATA } from "../assets/data/countries_data.js";
import HEX_DATA from "../assets/data/countries_hex_data.json.json";
import Globe from "react-globe.gl";
import GlobeConfigContext from "../context/globeConfig.js";
import ThemeContext from "../context/theme.js";

const getRandomCountry = () => {
  return COUNTRIES_DATA[Math.floor(Math.random() * COUNTRIES_DATA.length)];
};

export default function CustomGlobe({ globeConfig }) {
  const globeEl = useRef();
  const country = getRandomCountry();
  const [selectedCountry, setSelectedCountry] = useState({
    lat: country.latitude,
    lng: country.longitude,
    label: country.name,
  });
  const [hex, setHex] = useState({ features: [] });

  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    const MAP_CENTER = { lat: 0, lng: 0, altitude: 1.5 };
    globeEl.current.pointOfView(MAP_CENTER, 0);
  }, [globeEl]);

  useEffect(() => {
    const countryLocation = {
      lat: 7.48884,
      lng: 80.975391,
      altitude: 1.5,
    };

    globeEl.current.pointOfView(countryLocation, 0);
  }, [selectedCountry]);

  return (
    <Globe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
      ref={globeEl}
      height={+1000}
      width={+1000}
      globeImageUrl={globeConfig.image}
      backgroundColor="rgba(255, 0, 0, 0)"
      // waitForGlobeReady
      // showGlobe={true}
      labelsData={[selectedCountry]}
      labelText={"label"}
      labelSize={1.6}
      labelColor={useCallback(() => "red", [])}
      labelDotRadius={0.2}
      labelAltitude={0.05}
      hexPolygonsData={hex.features}
      hexPolygonResolution={3} //values higher than 3 makes it buggy
      hexPolygonMargin={0.62}
      hexPolygonColor={useCallback(
        () => globeConfig.pixel,
        [globeConfig.pixel]
      )}
    />
  );
}
