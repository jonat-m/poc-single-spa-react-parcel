import { useEffect, useState } from "react";

import { listenEvent } from "@org/utils";

export default function App() {
  const [tasks, setTasks] = useState([]);

  async function parcelLoad() {
    listenEvent("@org/react-app1/todo/add-task", (event: any) => {
      setTasks((oldTasks) => [...oldTasks, event.detail]);
    });
  }

  useEffect(() => {
    parcelLoad();
  }, []);

  return (
    <>
      <h1>@org/react-parcel </h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th>{task.id}</th>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
