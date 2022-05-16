import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1 style={{ whiteSpace: "nowrap" }}>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

//three ways to target the text wrapping
// <h1 style={{whiteSpace: "nowrap"}}>{time}</h1>
// const now = new Date().toLocaleTimeString()..substring(0,8)
// const now = new Date().toLocaleTimeString([], { hour12: false })

export default App;
