import React, { useState } from "react";
import Explorenav from "../components/loginnav";

const OngoingCollab = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [activeTab, setActiveTab] = useState("work");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-[#f4f4f4]">
      <Explorenav />

      <div className="max-w-6xl w-full p-6 ml-72">
        <div className="bg-white rounded-3xl shadow-lg border p-8 space-y-8">
          {/* Header Section */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Pitchdeck Presentation
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                A collaboration on: pitchdeck presentation
              </p>
              <div className="flex gap-3 mt-3">
                <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  2 Months
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                  In-Progress
                </span>
              </div>
            </div>
          </div>

          {/* Completion Checkbox */}
          <div>
            <label className="inline-flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="accent-green-500" />
              Mark as Completed (Both collaborators must mark it)
            </label>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 border-b pb-2">
            <button
              onClick={() => setActiveTab("work")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === "work"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Work Status
            </button>
            <button
              onClick={() => setActiveTab("legal")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === "legal"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Terms & Conditions
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "work" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                📝 Shared Task List
              </h2>

              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Enter a new task..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAddTask}
                  className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-150"
                >
                  Add
                </button>
              </div>

              <ul className="space-y-3">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-xl border"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleTask(task.id)}
                        className="accent-blue-600"
                      />
                      <span
                        className={`${
                          task.done
                            ? "line-through text-gray-400"
                            : "text-gray-700"
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700 text-lg"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "legal" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                📄 Legal Assistance
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500">Owner</span>
                <a
                  href="/sample-legal-agreement.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
                >
                  Download Collaboration Agreement
                </a>
              </div>
              <div className="mt-4">
                <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-green-500" />
                  Mark as Completed (Both collaborators must mark it)
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OngoingCollab;
