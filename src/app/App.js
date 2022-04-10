import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

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
            <SearchStatus length={users} />
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
