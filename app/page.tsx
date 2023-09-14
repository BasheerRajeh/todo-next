"use client";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AuthModal from "@/components/auth-modal";
import Todo from "@/components/todo";
import { auth } from "@/lib/firebase/app";

export default function Home() {
    const [open, setOpen] = useState(false);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (!user && !loading) return setOpen(true);
        setOpen(false);
    }, [loading, user]);

    return (
        <>
            <AuthModal open={open} />
            <div className="flex flex-col gap-8">
                <h1 className="text-center text-3xl font-bold">Todo List</h1>
                <Todo />
            </div>
        </>
    );
}
