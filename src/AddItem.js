import React, {useState } from "react";
import axios from "axios";

const AddItem = ({setData, data}) => {
    const [newItem, setNewItem] = useState("");
    const postItem = () => {
<<<<<<< HEAD
        console.log(newItem)
        axios.post("/item", {
=======

        axios.post("http://localhost:4000/item", {
>>>>>>> 681e5237715133d11eaf4ff3a96838dbfff70457
            name: newItem
        }).then(res => {
            data.push(res);
            setData(data);
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