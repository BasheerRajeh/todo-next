import { cn } from "@/lib/utils";
import { Check, XIcon } from "lucide-react";

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
};

interface TodoProps {
    todo: Todo;
    onComplete: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, onComplete, onDelete }) => {
    return (
        <div
            key={todo.id}
            className="flex items-center justify-between space-x-2 rounded-lg border px-4 py-2 hover:border-white transition-all"
            onClick={() => onComplete(todo.id)}
        >
            <button
                className={cn(
                    "w-6 h-6 rounded-lg bg-teal-100 p-1 transition-colors duration-300 hover:bg-teal-950",
                    { ["bg-teal-700"]: todo.completed }
                )}
                type="button"
            >
                {todo.completed && <Check className="w-4 h-4" />}
            </button>
            <h2
                className={cn("flex-grow text-lg cursor-pointer", {
                    ["line-through"]: todo.completed,
                })}
            >
                {todo.title}
            </h2>
            <button
                className="w-6 h-6 rounded-lg bg-red-600 p-1 transition-colors duration-300 hover:bg-red-700"
                type="button"
                onClick={() => onDelete(todo.id)}
            >
                <XIcon className="w-4 h-4" />
            </button>
        </div>
    );
};

export default TodoItem;
