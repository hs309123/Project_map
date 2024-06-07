import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../config/firebaseConfig';
import useAuth from '../../../CustomHooks/useAuth';
import { signOut } from "firebase/auth";


const Navbar = () => {

    const { isLogin, user } = useAuth()

    const handleLogout = () => {
        signOut(auth)
    };



    return (
        <nav className="bg-themeColor p-4 sticky top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">eStore</Link>
                <div className="space-x-4">
                    <NavLink to="/" className={({ isActive }) => (`text-white hover:border-b border-white ${isActive && "border-b"}`)}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (`text-white hover:border-b border-white ${isActive && "border-b"}`)}>About</NavLink>
                    {isLogin ? (
                        <>
                            <NavLink to="/products" className={({ isActive }) => (`text-white hover:border-b border-white ${isActive && "border-b"}`)}>Products</NavLink>
                            {user?.displayName && <span className="text-white">Hello, {user?.displayName} </span>}
                            <button onClick={handleLogout} className="bg-white text-themeColor px-4 py-2 border border-white rounded-xl font-semibold hover:bg-themeColor hover:text-white transition">Logout</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login" className={({ isActive }) => (`text-white hover:border-b border-white ${isActive && "border-b"}`)}>Login</NavLink>
                            <NavLink to="/signup" className={({ isActive }) => (`text-white hover:border-b border-white ${isActive && "border-b"}`)}>Sign Up</NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
