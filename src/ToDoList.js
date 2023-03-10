import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="neglect"
          area-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
