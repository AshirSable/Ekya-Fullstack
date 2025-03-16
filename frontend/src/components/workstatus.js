import { useState } from "react";

const WorkStatus = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Define project scope & goals", status: "Active" },
    { id: 2, title: "Research NLP models (Gemma v3)", status: "Complete" },
    { id: 3, title: "Setup development environment", status: "Pending" },
    { id: 4, title: "Design UI wireframe", status: "Pending" },
    { id: 5, title: "Plan model integration", status: "Complete" },
  ]);

  return (
    <div className="p-3 border rounded-lg ">
      <h2 className="text-lg font-semibold mb-2">Work Status</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center p-2 border rounded-md"
          >
            <span className="font-medium">{task.id}. {task.title}</span>
            <span
              className={`text-sm px-2 py-1 rounded-lg ${
                task.status === "Complete"
                  ? "bg-green-100 text-green-700"
                  : task.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkStatus;
