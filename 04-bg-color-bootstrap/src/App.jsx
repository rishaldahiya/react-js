import { useState } from "react";

function App() {
  const [bgColor, setColor] = useState("black"); //default color

  const changeColor = (updatedColor) => {

    setColor(updatedColor)
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundColor: bgColor, width: "100vw" }}>
      <div className="row justify-content-center w-100 text-center" style={{ paddingTop: "415px" }}>
        <div className="col-2"><button type="button" className="btn btn-primary w-100" onClick={() => changeColor('blue')}>Blue</button></div>
        <div className="col-2"><button type="button" className="btn btn-secondary w-100" onClick={() => changeColor('gray')}>Gray</button></div>
        <div className="col-2"><button type="button" className="btn btn-success w-100" onClick={() => changeColor('green')}>Green</button></div>
        <div className="col-2"><button type="button" className="btn btn-danger w-100" onClick={() => changeColor('red')}>Red</button></div>
        <div className="col-2"><button type="button" className="btn btn-warning w-100" onClick={() => changeColor('orange')}>Orange</button></div>
      
      </div>
    </div>
  );
}





export default App;
