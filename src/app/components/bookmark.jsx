import React from "react";

const BookMark = ({status, ...rest}) => {
    return (
        <>
            <i className={"bi bi-bookmark" + (status.bookmark ? "-fill" : "")}
               onClick={() => rest.onClick(status._id)}> </i>
        </>
    )
};

export default BookMark;