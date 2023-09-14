"use client";

import { useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

import TodoForm from "@/components/todo/todoForm";
import { Todo } from "@/components/todo/todoItem";
import TodoList from "@/components/todo/todoList";
import { auth, firestore } from "@/lib/firebase/app";

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        let unsubscribe: () => void;

        if (user) {
            const todosDocRef = doc(firestore, "users", user?.uid);

            unsubscribe = onSnapshot(todosDocRef, (d) => {
                if (d.exists() && d.data()) {
                    setTodos(d.data().todos as Todo[]);
                }
            });
        }

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, [user]);

    const addTodo = async (title: string) => {
        const todosDocRef = doc(firestore, "users", user?.uid as string);

        await setDoc(todosDocRef, {
            todos: [
                ...todos,
                {
                    id: uuid4(),
                    title,
                    completed: false,
                },
            ],
        });
    };

    const handleComplete = async (id: string) => {
        const todosDocRef = doc(firestore, "users", user?.uid as string);
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        await setDoc(todosDocRef, {
            todos: newTodos,
        });
    };

    const handleDelete = async (id: string) => {
        const todosDocRef = doc(firestore, "users", user?.uid as string);
        const newTodos = todos.filter((todo) => todo.id !== id);

        await setDoc(todosDocRef, {
            todos: newTodos,
        });
    };

    return (
        <>
            <TodoForm onSubmit={addTodo} />
            {!loading ? (
                <TodoList
                    todos={todos}
                    onComplete={handleComplete}
                    onDelete={handleDelete}
                />
            ) : (
                <h2 className="text-center">Fetching data...</h2>
            )}
        </>
    );
};

export default Todo;
