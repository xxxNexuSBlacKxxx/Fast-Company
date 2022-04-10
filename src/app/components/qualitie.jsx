import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ user }) => {
    return (
        <>
            {user.qualities.map((quality) => (
                <span
                    key={quality._id}
                    className={`badge m-2 bg-${quality.color}`}
                >
                    {quality.name}
                </span>
            ))}
        </>
    );
};

Qualitie.propTypes = {
    user: PropTypes.object.isRequired
};

export default Qualitie;
