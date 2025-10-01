"use client";

import { useState } from "react";

type Task = {
  id: number,
  title: string,
  state: "PINNED" | "COMPLETED" | "ACTIVE";
}

const defaultTasks: Task[] = [
  { id: 1, title: 'Task 1', state: 'ACTIVE' },
  { id: 2, title: 'Task 2', state: 'COMPLETED' },
  { id: 3, title: 'Task 3', state: 'PINNED' },
];

function TaskItem({ task }: { task: Task }) {
  return (
    <div>
      <p>{task.title}</p>
    </div>
  );
}

function TaskList({ tasks }: { tasks: Task[] }) {
  const [myTasks, setTasks] = useState(tasks);
  const [taskInput, setTaskInput] = useState("");

  return (
    <div>
      <section>
        {myTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </div>
  )
}

export default function Checklist() {
  return (
    <div>
      <main>
        <h1>Checklist Page</h1>
        <TaskList tasks={defaultTasks} />
      </main>
    </div>
  );
}
