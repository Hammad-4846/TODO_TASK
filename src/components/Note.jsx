import React from "react";

function Note({ title, desctiption, id, deleteTask, categ }) {
  console.log(id);
  const handleDelete = () => {
    deleteTask(id);
  };

  // console.log("This is cate",categ);

  const getColorForButton = () => {
    const allColors = [
      {
        categoryName: "Bug",
        color: "Red",
      },
      {
        categoryName: "Story",
        color: "Green",
      },
      {
        categoryName: "Epic",
        color: "purple",
      },
      {
        categoryName: "Task",
        color: "blue",
      },
    ];

    const color = allColors.find((category) => category.categoryName.toLocaleLowerCase() == categ.toLocaleLowerCase());
    console.log("Color",color)
    return color.color;
  };

  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{desctiption}</p>
      <p style={{ background: getColorForButton() }}>{categ}</p>

      <button onClick={handleDelete}>Delte Task</button>
    </div>
  );
}

export default Note;
