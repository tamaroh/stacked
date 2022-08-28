import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  async function fetchAllData() {
    const response = await axios.get("/api");
    setData(await response.data);
  }
  useEffect(() => {
    fetchAllData();
  }, [data]);
const removeItem = (e) => {
  axios.delete(`/api/item/${e.target.id}`);
}

  const itemList = data.map((item, index) => {
    return <li key={index}>{item.name}&nbsp;<span onClick={removeItem} id={item._id}>🗑</span></li>;
  });
  return (
    <div>
      <h1>Stacked!</h1>
      <div>
        <h2>Items</h2>
        <ul>{itemList}</ul>
        <div>
          <AddItem data={data} setData={setData}></AddItem>
        </div>
      </div>
    </div>
  );
}

export default App;
