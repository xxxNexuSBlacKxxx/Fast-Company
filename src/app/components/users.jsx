import React from 'react';
import User from "./user";
import "bootstrap/dist/css/bootstrap.css"

const Users = ({users, ...rest}) => {
    return (
        <>
            {users.length > 0 &&
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качество</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    <User user={users} onDelete={rest.onDelete} onClick={rest.onClick}/>
                    </tbody>
                </table>
            }
        </>
    )
};

export default Users;
