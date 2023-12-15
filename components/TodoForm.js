import React, { useRef } from "react";
import classes from "./TodoForm.module.css";
const TodoForm = (props) => {
  const taskName = useRef();
  const description = useRef();

  const addHandler = () => {
    const task = {
      taskName: taskName.current.value,
      description: description.current.value,
    };
    console.log(task);
    props.onAddTask(task);
  };
  return (
    <div className={classes["todo-form-container"]}>
      <input
        type="text"
        placeholder="Enter TaskName"
        ref={taskName}
        className={classes["todo-input"]}
      />
      <input
        type="text"
        placeholder="Enter Description"
        ref={description}
        className={classes["todo-input"]}
      />
      <button onClick={addHandler} className={classes["todo-button"]}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
