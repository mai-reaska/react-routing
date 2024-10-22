import { Link, NavLink } from "react-router-dom"
function Navbar() {
    return (
        <div className="flex justify-between bg-blue-500 text-2xl px-4 text-white">
            <ul className="flex">
                <NavLink to="/">
                    <li className="ml-4">Home</li>
                </NavLink>
                <NavLink to="/about">
                    <li className="ml-4">About</li>
                </NavLink>
                <NavLink to="/register">
                    <li className="ml-4">Contact</li>
                </NavLink>
                <NavLink to="/team">
                    <li className="ml-4">Team</li>
                </NavLink>
                <NavLink to="product">
                    <li className="ml-4">Store</li>
                </NavLink>
                <NavLink to="student">
                    <li className="ml-4">Student</li>
                </NavLink>
                <NavLink to="login">
                    <li className="ml-4">Login</li>
                </NavLink>
            </ul>
            <h1>BEC</h1>
        </div>
    )
}
export default Navbar