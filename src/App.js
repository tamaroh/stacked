import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function fetchAllData() {
    const response = await fetch("http://localhost:4000/");
    setData(await response.json());
  }
  useEffect(() => {
    fetchAllData();
  }, []);
  const itemList = data.map((item, index) => {
    return <li key={index}>{item.name}</li>;
  });
  return (
    <div>
      <h1>Stacked!</h1>
      <div>
        <h2>Items</h2>
        <ul>{itemList}</ul>
        <div>
          <AddItem></AddItem>
        </div>
      </div>
    </div>
  );
}

export default App;
