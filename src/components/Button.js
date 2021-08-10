import React from "react";

const Button = (props) => {
    const { name, handleClick, className, id } = props;
    return (
        <button name={name} className={className} id={id} onClick={handleClick}>{name}</button>
    )
};

export default Button;