import React from "react";

const Button = ({title = "Nothing"}) => (
    <div>
        <button className="button">{title}</button>
    </div>
)

export default Button;