import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
    const {user} = useContext(AuthContext);
    console.log('context', user.photoURL);
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
                    <Link to='/order'>Order</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
            <div className="w-10">
                <img className="rounded-full" src='' />
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    {
                        user?.photoURL && <img src={user.photoURL} />
                    }
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Logout</a></li>
                </ul>
            </div>
            {
                user?.email && <span>{user.email}</span>
            }
            </div>
        </div>
    </div>          
    );
};

export default Header;
