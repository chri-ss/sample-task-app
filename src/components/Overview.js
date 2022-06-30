import React from "react";

const Overview = (props) => {
  const { tasks, remove } = props;

  const handleRemove = (id) => {
    console.log("aa");
    remove(id);
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <div>
            <li key={task.id}>
              {task.rank}.{task.text}
            </li>
            <button onClick={(e) => handleRemove(task.id, e)}>delete</button>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;
