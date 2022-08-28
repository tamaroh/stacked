import React, {useState } from "react";
import axios from "axios";

const AddItem = ({setData, data}) => {
    const [newItem, setNewItem] = useState("");
    const postItem = () => {
        console.log(newItem)
        axios.post("/item", {
            name: newItem
        }).then(res => {
            data.push(res);
            setData(data);
            console.log(res)
        })
        .catch(err => console.log(err));
    }
    const onChange = (e) => {
        setNewItem(e.target.value);
    }
  return (
    <div className="additem">
      名前：<input type="text" name="" value={newItem} onChange={onChange}></input>
      <button onClick={postItem}>追加</button>
    </div>
  );
};

export default AddItem;