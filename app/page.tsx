import Todo from "@/components/todo";

export default function Home() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-center text-3xl font-bold">Todo List</h1>
            <Todo />
        </div>
    );
}
