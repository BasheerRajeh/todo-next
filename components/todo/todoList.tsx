"use client";

import TodoItem, { Todo } from "./todoItem";

interface TodoListProps {
    todos: Todo[];
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onComplete, onDelete }) => {
    return (
        <div className="flex flex-col gap-3">
            {todos &&
                todos.length > 0 &&
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onComplete={onComplete}
                        onDelete={onDelete}
                    />
                ))}
        </div>
    );
};

export default TodoList;
