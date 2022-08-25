import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function fetchAllData () {
    const response = await fetch("http://localhost:4000/");
    setData(await response.json());
  }
  useEffect(() => {
    fetchAllData()
  }, []);
  const itemList = data.map((item, index) => {
    return <li key={index}>{item.name}</li>
  });
  return (
    <>
      it works!
      <div>
        <ul>
          {itemList}
        </ul>
      </div>
    </>
  );
}

export default App;
