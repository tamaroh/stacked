import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  async function fetchAllData () {
    const response = await fetch("http://localhost:4000/");
    setData(await response.json());
  }
  useEffect(() => {
    fetchAllData()
  }, []);

  return (
    <>
      it works!
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
