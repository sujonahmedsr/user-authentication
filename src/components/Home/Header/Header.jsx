import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../assets/AuthProvider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    return (
        <div className=" shadow-lg fixed bg-white z-10 right-0 left-0">
            <div className="navbar container mx-auto  ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Authentication</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}> Home </NavLink></li>
                        <li><NavLink to={'/order'}>Orders </NavLink>
                        </li>
                        {
                            user ? <>
                                <span>{user.email}</span>
                                <Link onClick={handleSignOut} className="btn btn-sm" to={'/login'}>Sign Out</Link>
                            </>
                                :
                                <>
                                    <li><NavLink to={'/login'}> Login </NavLink></li>
                                    <li><NavLink to={'/registration'}>Sing Up </NavLink></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;