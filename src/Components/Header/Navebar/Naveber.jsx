import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const Naveber = () => {
    return (
        <div className=" flex justify-between">
            <Logo></Logo>
            <nav className=" flex gap-8 text-xl font-bold">
                <ul>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </ul>
                
                <ul>
                    <NavLink
                        to="/favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Favorites
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Login
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Naveber;