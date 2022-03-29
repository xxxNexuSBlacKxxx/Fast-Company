import React, {useState} from 'react';
import api from '../api';
import "bootstrap/dist/css/bootstrap.css"
import button from "bootstrap/js/src/button";
import {logDOM} from "@testing-library/react";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const getUsersClasses = () => {
        let classes = "badge m-2 bg-";
        classes += users.length === 0 ? "danger" : "primary";
        return classes;
    };

    const handleDelete = (id) => {
        setUsers(prevState => prevState.filter(user => user._id !== id));
    };

    const renderPhrase = () => {
        if (users.length === 2 || users.length === 3 || users.length === 4) {
            return `${users.length} человека тусанут с тобой`
        } else if (users.length === 1) {
            return `${users.length} человек тусанет с тобой`
        } else {
            return `${users.length} человек тусанут с тобой`
        }
    };

    if (users.length === 0) {
        return (
        <h2>
            <span className={getUsersClasses()}>{users.length === 0 ? 'Никто с тобой не тусанет' : renderPhrase()}</span>
        </h2>
        )
    } else {
        return (
            <>

                <h2>
                    <span className={getUsersClasses()}>{users.length === 0 ? 'Никто с тобой не тусанет' : renderPhrase()}</span>
                </h2>

                <table className="table">

                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>

                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.qualities.map(quality =>
                                <span key={quality._id} className={`badge m-2 bg-${quality.color}`}>
                            {quality.name}
                        </span>)
                            }</td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate} / 5</td>
                            <td>
                                <button className="btn btn-danger btn-sm m-2"
                                        onClick={() => handleDelete(user._id)}>Удалить
                                </button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </>
        );
    }


};

export default Users;
