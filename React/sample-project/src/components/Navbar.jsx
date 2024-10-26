import React, { useState } from "react";

const Navbar = ({ appdata, logo }) => {
    const [numberState, setNumberState] = useState(0);
    const [stringState, setStringState] = useState("a");
    const [arrayState, setArrayState] = useState(["a", false, 0]);

    console.log(numberState);
    console.log(stringState);
    console.log(arrayState);

    return (
        <>
            <div>
                <h1>{appdata.appname} {logo}</h1>
                <p>Number State: {numberState}</p>
                <p>String State: {stringState}</p>
                <p>Array State: {JSON.stringify(arrayState)}</p>
            </div>
        </>
    );
};

export default Navbar;
