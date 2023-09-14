"use client";
import { useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";
import { useAuthState } from "react-firebase-hooks/auth";
import TodoForm from "@/components/todo/todoForm";
import { Todo } from "@/components/todo/todoItem";
import TodoList from "@/components/todo/todoList";
import { auth } from "@/lib/firebase/app";

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [open, setOpen] = useState(false);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (!user && !loading) return setOpen(true);
        setOpen(false);
    }, [loading, user]);

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
