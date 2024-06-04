import React, { useState } from "react";
import NoteList from "./components/NoteList";

import "./App.css";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "This is rando",
      desc: "Desc",
      category: "Task",
    },
    {
      id: 2,
      title: "This is rando",
      desc: "Desc",
      category: "Task",
    },
    {
      id: 3,
      title: "This is rando",
      desc: "Desc",
      category: "Task",
    },
    {
      id: 4,
      title: "This is rando",
      desc: "Desc",
      category: "Task",
    },
  ]);

  const handleAddTask = (newNote) => {
    const newData = [...data, newNote];

    setData(newData);
  };

  const deleteTask = (id) => {
    const newData = data.filter((note) => note.id !== id);
    setData(newData);
  };

  return (
    <div>
      <NoteList
        data={data}
        handleAddTask={handleAddTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
