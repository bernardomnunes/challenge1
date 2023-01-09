// import { useState } from "react";
import { useState } from "react";
import "./App.css";

interface CoordsProps {
  clientX: number;
  clientY: number;
}

function App() {
  const [coords, setCoords] = useState<CoordsProps[]>([]);
  const [DeletedCoords, setDeletedCoords] = useState<CoordsProps[]>([]);

  const handleGetCoords = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;

    setCoords([...coords, { clientX, clientY }]);
  };

  const handleDeleteLastCircle = () => {
    const arrayCoords = coords;
    const coordPoped = arrayCoords.pop();

    setCoords(arrayCoords);
    if (!coordPoped) return;

    setDeletedCoords([...DeletedCoords, coordPoped]);
  };

  const handleGetCoordsDeleted = () => {
    const getCoordsDeleted = DeletedCoords.pop();
    if (!getCoordsDeleted) return;
    setCoords([...coords, getCoordsDeleted]);
  };

  return (
    <>
      <button onClick={handleDeleteLastCircle}>
        Delete the last circle clicked
      </button>
      <button onClick={handleGetCoordsDeleted}>Get the circle deleted</button>
      <div className="app" onClick={handleGetCoords}>
        {coords.map((clickedPoint, index) => {
          return (
            <div
              key={index}
              style={{
                left: clickedPoint.clientX,
                top: clickedPoint.clientY,
                position: "absolute",
                borderRadius: "50%",
                background: "yellow",
                width: "12px",
                height: "12px",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default App;
