import React, { useState } from "react";

function UpdateTask({ title, description }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [category, setNewCatgory] = useState("");

  return (
    <div className="Update__Task note" style={{ marginTop: "3rem" }}>
      <input
        onChange={(e) => newTitle(e.target.value)}
        type="text"
        placeholder={title}
      />
      <textarea
        onChange={(e) => newDesc(e.target.value)}
        placeholder={description}
      />
      <select onChange={(e) => setNewCatgory(e.target.value)}>
        <option>{category}</option>
        <option value={"Bug"}>Bug</option>
        <option value={"Story"}>Story</option>
        <option value={"Task"}>Task</option>
        <option value={"Epic"}>Epic</option>
      </select>{" "}
    </div>
  );
}

export default UpdateTask;
