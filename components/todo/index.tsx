"use client";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import TodoForm from "@/components/todo/todoForm";
import { Todo } from "@/components/todo/todoItem";
import TodoList from "@/components/todo/todoList";

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        setTodos((prev) => [...prev, { id: uuid4(), title, completed: false }]);
    };

    const handleComplete = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            return newTodos;
        });
    };
    const handleDelete = (id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <TodoForm onSubmit={addTodo} />
            <TodoList
                todos={todos}
                onComplete={handleComplete}
                onDelete={handleDelete}
            />
        </>
    );
};

export default Todo;
