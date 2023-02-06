import React from "react";

function Child2(props) {

    const showPrivateData = ture;

    return (
        <div>
            <div>
                {showPrivateData ? <p>This is private: lsjlkjfsdl</p> : <></>}
                {showPrivateData && <p>This is private: eoiurwoe</p>}
            </div>

            Count Inside child2: {props.countFromParent}
            <button onClick={props.uploadData}>Upload Data</button>
        </div>
    );
}

export default Child2;