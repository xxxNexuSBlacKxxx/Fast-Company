import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ user, ...rest }) => {
    return (
        <>
            {user.map((user) => (
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>
                        <Qualitie user={user} />
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate} / 5</td>
                    <td>
                        <BookMark status={user} onClick={rest.onClick} />
                    </td>
                    <td>
                        <button
                            className="btn btn-danger btn-sm m-2"
                            onClick={() => rest.onDelete(user._id)}
                        >
                            Удалить
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
};
User.propTypes = {
    user: PropTypes.array.isRequired,
    rest: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
