import React, { useState } from "react";
import Note from "./Note";
import NewNote from "./CreateNote";
import UpdateTask from "./UpdateTask";

function NoteList({ data, handleAddTask, deleteTask }) {
  const [updateTaskShow, setUpdateTaskShow] = useState(false);

  return (
    <div className="container">
      <NewNote handleAddTask={handleAddTask} />
      <div className="note__list">
        {data?.map((note, key) => (
          <Note
            id={note.id}
            categ={note.category}
            deleteTask={deleteTask}
            key={key}
            desctiption={note.desc}
            title={note.title}
          />
        ))}
      </div>

      <div className="overlay">
        <UpdateTask />
      </div>
    </div>
  );
}

export default NoteList;
