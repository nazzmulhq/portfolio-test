"use client";

import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch("/api/users");
        const data: User[] = await response.json();
        setUsers(data);
    };

    const addUser = async () => {
        if (!name || !email) {
            return;
        }
        const response = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        });
        if (response.ok) {
            setName("");
            setEmail("");
            fetchUsers();
        } else {
            console.error("Failed to add user");
        }
    };

    const updateUser = async (id: number) => {
        const updatedName = prompt("Enter new name", name);
        const updatedEmail = prompt("Enter new email", email);
        if (!updatedName || !updatedEmail) {
            return;
        }

        const response = await fetch("/api/users", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id,
                name: updatedName,
                email: updatedEmail,
            }),
        });
        if (response.ok) {
            fetchUsers();
        } else {
            console.error("Failed to update user");
        }
    };

    const deleteUser = async (id: number) => {
        const response = await fetch("/api/users", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        if (response.ok) {
            fetchUsers();
        } else {
            console.error("Failed to delete user");
        }
    };

    return (
        <main className="h-screen">
            <h1>User Management</h1>
            <input
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                type="text"
                value={name}
            />
            <input
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                value={email}
            />
            <button onClick={addUser}>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span>
                            {user.name} ({user.email})
                        </span>
                        <button onClick={() => updateUser(user.id)}>
                            Update
                        </button>
                        <button onClick={() => deleteUser(user.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
