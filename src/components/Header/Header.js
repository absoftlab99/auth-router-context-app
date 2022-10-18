import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
            <Link to='/' className="btn btn-ghost normal-case text-xl">authContext</Link>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
            <div className="w-10">
                <img className="rounded-full" src="https://placeimg.com/80/80/people" />
            </div>
            </div>
        </div>
    </div>          
    );
};

export default Header;
