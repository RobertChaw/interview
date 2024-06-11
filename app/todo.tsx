"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Checkbox } from "@nextui-org/react";

export const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "Complete online JavaScript course", completed: true, index: 0 },
    { text: "Jog around the park 3x", completed: false, index: 1 },
    { text: "10 minutes meditation", completed: false, index: 2 },
    { text: "Read for 1 hour", completed: false, index: 3 },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const left = todos.reduce((prv, item) => {
    return prv + Number(!item.completed);
  }, 0);

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }
    if (newTodo.trim() !== "") {
      setTodos([
        { text: newTodo, completed: false, index: todos.length },
        ...todos,
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  function completeAll() {
    setTodos((prv) => {
      return prv.map((item) => ({ ...item, completed: true }));
    });
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-white drop-shadow">TODO</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={addTodo}
          placeholder="Create a new todo..."
          className="w-full p-4 text-lg border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg w-[500px]">
        <ul className="list-none p-0">
          <AnimatePresence>
            {todos.map((todo, index) => (
              <motion.li
                key={todo.index}
                className={`flex items-center justify-between px-6 py-4 text-lg border-b ${todo.completed ? "line-through text-gray-500" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Checkbox
                  isSelected={todo.completed}
                  onValueChange={() => toggleTodo(index)}
                  size="lg"
                >
                  {todo.text}
                </Checkbox>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <div className="flex gap-4 p-4 items-center">
          <span>{left} items left</span>
          <div>
            <button
              onClick={completeAll}
              className="px-4 py-1 rounded hover:bg-blue-500 hover:text-white transition"
            >
              All Active Completed
            </button>
            <button
              onClick={clearCompleted}
              className="px-4 py-1 rounded ml-2 hover:text-white hover:bg-red-500 transition"
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
