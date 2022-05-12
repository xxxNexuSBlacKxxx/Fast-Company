import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../api";

const UsersPage = ({ userId }) => {
    const history = useHistory();
    const [userById, setUserById] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUserById(data));
    }, []);
    console.log(userById);
    console.log(userId);
    const handleTransition = () => {
        history.push("/users");
    };
    return (
        <>
            {userById
                ? <div>
                    <div className="p-4 h1 d-flex justify-content-center text-primary rounded-pill bg-secondary bg-gradient bg-opacity-75">{userById.name}</div>
                    <div className="p-2 h3 d-flex justify-content-center text-warning rounded-pill bg-secondary bg-gradient bg-opacity-75">{`Профессия: ${userById.profession.name}`}</div>
                    {userById.qualities.map((itemElem) => {
                        return (
                            <div key={itemElem._id} className="p-2 h3 d-flex justify-content-center text-danger rounded-pill bg-secondary bg-gradient bg-opacity-75">
                                {itemElem.name}
                            </div>
                        );
                    })}
                    <div className="p-2 h3 d-flex justify-content-center text-warning rounded-pill bg-secondary bg-gradient bg-opacity-75">{`Встречи: ${userById.completedMeetings}`}</div>
                    <div className="p-2 h4 d-flex justify-content-center text-warning rounded-pill bg-secondary bg-gradient bg-opacity-75">{`Рейтинг: ${userById.rate}`}</div>
                    <button
                        onClick={() => {
                            handleTransition();
                        }}
                        className="p-2 m-5 h4 btn-lg"
                    >
                        Переход к пользователям
                    </button>
                </div>
                : "loading..."
            }
        </>
    );
};
UsersPage.propTypes = {
    userId: PropTypes.string
};

export default UsersPage;
