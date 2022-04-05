import React from "react";

const Qualitie = ({user}) => {
    return (
        <>
            {user.qualities.map(quality =>
                <span
                    key={quality._id}
                    className={`badge m-2 bg-${quality.color}`}>
                                {quality.name}
                            </span>)}
        </>
    )
};

export default Qualitie;