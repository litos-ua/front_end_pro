
import React, { useState } from "react";
import './Header.css';

export const Header = () => {
    const [showDate, setShowDate] = useState(false);

    const isOpenHandler = () => {
        setShowDate(prevShowDate => !prevShowDate);
    };


    return (
        <header className='header'>
            <div>My logo</div>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><button onClick={isOpenHandler}>Click me</button></li>
                <li>{showDate && <div>{new Date().toISOString()}</div>}</li>
            </ul>
        </header>
    );
};

