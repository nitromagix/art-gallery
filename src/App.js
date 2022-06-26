import "./App.css";

import { useState, useEffect } from "react";
import Gallery from "./Components/Gallery";
import ButtonBar from "./Components/ButtonBar";

function App() {
  let [artId, setArtId] = useState(12720);
  let [data, setData] = useState({});

  // in App.js
  // send this function down to <ButtonBar />
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  useEffect(() => {
    document.title = "Artworld";
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
      .then((response) => response.json())
      .then((resData) => setData(resData));
  }, [artId]);

  return (
    <div className="App">
      <header className="App-header">
        <span>art-gallery</span>
        <ButtonBar handleIterate={handleIterate}></ButtonBar>
        <Gallery
          objectImg={data.primaryImage}
          artist={data.artistDisplayName}
          title={data.title}
        />
      </header>
    </div>
  );
}

export default App;
