import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <>
            <i
                className={"bi bi-bookmark" + (status.bookmark ? "-fill" : "")}
                onClick={() => rest.onClick(status._id)}
            >
                {" "}
            </i>
        </>
    );
};
BookMark.propTypes = {
    status: PropTypes.object.isRequired,
    rest: PropTypes.object,
    onClick: PropTypes.func.isRequired
};

export default BookMark;
