"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface TodoFormProps {
    disable?: boolean;
    onSubmit: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ disable, onSubmit }) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!todo) alert("Please enter a todo");
        else {
            setTodo("");
            onSubmit(todo);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
                type="text"
                value={todo}
                disabled={disable}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add todo..."
                className="w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-within:border-1 focus-within:border-white"
            />
            <Button type="submit" disabled={disable} aria-label="Add todo">
                Add
            </Button>
        </form>
    );
};

export default TodoForm;
