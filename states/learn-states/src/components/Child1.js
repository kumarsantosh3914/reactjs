import React, { useState } from "react";

function Child1(props) {
    const [countInChild1, SetCountInChild1] = useState(0);

    function updateCountInChild1() {
        SetCountInChild1(countInChild1 + 1);
        props.onCuntUpdate(countInChild1 + 1)
    }


    return (
        <div>
            <p>Inside the Child 1: {countInChild1}</p>
            <button onClick={updateCountInChild1}> Increment</button>
        </div>
    );
}


export default Child1;