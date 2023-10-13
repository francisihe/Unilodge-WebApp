import { useContext, useState } from "react";
import { Link, useLocation, useRoutes } from "react-router-dom"
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

const AdminSidebar = () => {

    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
      }

    return (
        <div className="flex lg:w-1/4 sm:w-3/4 md:w-1/4 bg-gray-200 h-50 rounded-md fixed">
            <div className="flex flex-col gap-3 m-5">
                <Link to={'/properties'} className="hover:bg-orange-300 p-2 rounded-full">
                    Manage Properties
                </Link >
                <Link to={'admin/bookings'} className="hover:bg-orange-300 p-2 rounded-full">
                    Manage Bookings
                </Link>
                <Link to={'admin/users'} className="hover:bg-orange-300 p-2 rounded-full">
                    Manage Users
                </Link>
                <Link onClick={logout} className="hover:bg-orange-300 p-2 rounded-full">
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default AdminSidebar