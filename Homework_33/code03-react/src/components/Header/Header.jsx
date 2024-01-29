// import React from "react";
// import './Header.css';
//
// export class Header extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             showDate: false,
//         };
//     }
//
//     isOpenHandler = () => {
//         this.setState((state) => {
//             console.log(state);
//             return { showDate: !state.showDate };
//         });
//     };
//
//
//     render() {
//         const { showDate } = this.state;
//         const styles = {
//             fontWeight: 300,
//             color: "#00faff",
//         };
//         return (
//             <header className='header'>
//                 <div>My logo</div>
//                 <ul>
//                     <li><a href='/'>Home</a></li>
//                     <li><button onClick={this.isOpenHandler}>Click me</button></li>
//                     <li>{showDate && <div>{new Date().toISOString()}</div>}</li>
//                 </ul>
//             </header>
//         )
//     }
// }

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

