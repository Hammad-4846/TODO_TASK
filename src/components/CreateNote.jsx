import React, { useState } from "react";

function Note({ handleAddTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  console.log(category);

  const handleSubmit = () => {
    const id = Math.random() * 6;

    handleAddTask({
      title,
      desc,
      id,
      category,
    });

    setTitle("");
    setDesc("");
  };
  return (
    <div className="note new">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="input"
        placeholder="Enter Desc"
      />
      <textarea onChange={(e) => setDesc(e.target.value)} rows={8} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Select Category</option>
        <option value={"Bug"}>Bug</option>
        <option value={"Story"}>Story</option>
        <option value={"Task"}>Task</option>
        <option value={"Epic"}>Epic</option>
      </select>
      <button onClick={handleSubmit}>Add A Task</button>
    </div>
  );
}

export default Note;
