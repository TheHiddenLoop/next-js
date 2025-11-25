"use client";

import React, { useState, useReducer } from "react";
import ShowTodos from "./components/ShowTodos";

const reducerTask = {
  ADD: "add",
  DELETE: "delete",
  TOGGLE: "toggle",
  UPDATE: "update",
};

function ReducerFunction(state, action) {
  switch (action.type) {
    case reducerTask.ADD:
      return [...state, action.payload];

    case reducerTask.DELETE:
      return state.filter(item => item.id !== action.payload);

    case reducerTask.TOGGLE:
      return state.map(item =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );

    case reducerTask.UPDATE:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, task: action.payload.newTask }
          : item
      );

    default:
      return state;
  }
}

function Todox() {
  const [task, setTask] = useState("");
  const [todos, dispatch] = useReducer(ReducerFunction, []);
  const [model, setModel] = useState(false);
  const [updatedTask, setUpdatedTask] = useState("");
  const [updateId, setUpdateId] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    dispatch({
      type: reducerTask.ADD,
      payload: {
        id: crypto.randomUUID(),
        task,
        completed: false,
      },
    });

    setTask("");
  };

  const handleToggle = (id) => {
    dispatch({ type: reducerTask.TOGGLE, payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: reducerTask.DELETE, payload: id });
  };

  const openUpdateModal = (id, text) => {
    setUpdateId(id);
    setUpdatedTask(text);
    setModel(true);
  };

  const handleUpdate = () => {
    if (!updatedTask.trim()) return;
    dispatch({
      type: reducerTask.UPDATE,
      payload: { id: updateId, newTask: updatedTask },
    });
    setModel(false);
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen bg-gradient-to-tr from-[#ffffff] via-[#007bff] to-[#f8f9fa]">

        <form
          onSubmit={handleAdd}
          className="py-4 flex items-center gap-5 justify-center w-[46%] max-w-[600px]"
        >
          <input
            type="text"
            placeholder="Enter a task name"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="bg-white text-black font-semibold py-2 px-3 rounded-lg outline-none border border-transparent hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 flex-1"
          />
          <button className="py-2 px-6 rounded-lg bg-blue-600 text-white font-bold hover:scale-110 transition-transform duration-300 cursor-pointer">
            Add Task
          </button>
        </form>

        <div className="bg-white p-5 w-full max-w-[600px] min-h-[200px] rounded-lg mt-3 shadow-md">
          {todos.map(item => (
            <ShowTodos
              key={item.id}
              checked={item.completed}
              task={item.task}
              onToggle={() => handleToggle(item.id)}
              onDelete={() => handleDelete(item.id)}
              onEdit={() => openUpdateModal(item.id, item.task)}
            />
          ))}
        </div>
      </div>

      {model && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-xl shadow-lg w-[300px] flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-800">Update Task</h2>

            <input
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
              className="border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setModel(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Todox;
