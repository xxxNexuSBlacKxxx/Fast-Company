import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        function loadData() {
            return new Promise((resolve) => {
                setTimeout(resolve, 2000);
            });
        }
        loadData()
            .then(() => {
                const preloaderEl = document.getElementById("preloader");
                preloaderEl.classList.add("hidden");
                preloaderEl.classList.remove("visible");
            });
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
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
