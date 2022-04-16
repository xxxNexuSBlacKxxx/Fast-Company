import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    console.log(users);
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                } else {
                    return { ...user };
                }
            })
        );
    };
    return (
        <>
            <Users
                users={users}
                {...users}
                onDelete={handleDelete}
                onClick={handleToggleBookMark}
            />
        </>
    );
}

export default App;
