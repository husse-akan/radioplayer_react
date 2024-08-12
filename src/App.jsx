import { useEffect, useState } from "react";
import Stations from "./components/Stations";

const url = "https://api.sr.se/api/v2/channels?format=json&size=100";
export default function App() {
  const [stationData, setStationData] = useState([]);
  const [userText, setUserText] = useState("");
  const [stationLoaded, setStationLoaded] = useState(false);

  async function fetchData() {
    const result = await fetch(url);
    const resultData = await result.json();
    setStationData(resultData.channels);
    setStationLoaded(true);
  }

  if (!stationLoaded) {
    console.log("Loading station");
    fetchData();
  }

  useEffect(() => {
    console.log(userText);
  }, [userText]);

  useEffect(() => {
    console.log(stationLoaded);
  }, [stationLoaded]);

  const handleLoadingImage = (station) => {
    if (station.image) {
      return console.log("loading image");
    } else
      return "https://static-cdn.sr.se/images/4866/92556cd3-3254-4424-91bb-6ba511f60f4c.jpg?preset=api-default-square";
  };

  return (
    <section className="main">
      <h1 className="headline">Radioplayer</h1>
      <div className="search-box">
        <label className="label" htmlFor="input-text">
          {" "}
          Search
        </label>
        <input
          type="text"
          className="text-input"
          id="input-text"
          onChange={(e) => {
            setUserText(e.target.value);
          }}
        />
      </div>

      <Stations
        stationData={stationData}
        handleLoadingImage={handleLoadingImage}
        userText={userText}
      />
    </section>
  );
}
