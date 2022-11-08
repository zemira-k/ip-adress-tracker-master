import "./App.css";
import { getApiInfo } from "./components/Api.js";
import React, { useState, useEffect } from "react";
import { Main } from "./components/Main.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

function App() {
  const [ipInfo, setIpInfo] = useState({
    ipNumber: "192.212.174.101",
    location: "Brooklyn, NY 10001",
    timeZone: "UTC - 05:00",
    isp: "SpaceX Starlink",
    ipPosition: [39.04372, -77.48749],
  });

  const updateInfo = (ip) => {
    getApiInfo(ip)
      .then((apiData) => {
        let ipLocation =
          apiData.location.city +
          ", " +
          apiData.location.region +
          " " +
          apiData.location.country +
          " " +
          apiData.location.postalCode;
        const info = {
          ipNumber: apiData.ip,
          location: ipLocation,
          timeZone: `UTC ${apiData.location.timezone}`,
          isp: apiData.isp,
          ipPosition: [apiData.location.lat, apiData.location.lng],
        };
        setIpInfo(info);
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  useEffect(() => {
    updateInfo(0);
  }, []);

  const handleClick = (ip) => {
    updateInfo(ip);
  };

  return (
    <div className="App">
      <Header ipInfo={ipInfo} handleClick={handleClick} />
      <Main ipInfo={ipInfo} />
      <Footer />
    </div>
  );
}

export default App;
