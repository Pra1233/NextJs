import React from "react";
import styles from "./TodoList.module.css"; // Import your CSS module

const TodoList = (props) => {
  return (
    <ul className={styles.todoList}>
      {props.list.map((task) => (
        <li key={task.id} className={styles.todoItem}>
          <h3>{task.taskName}</h3>
          <p>{task.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
