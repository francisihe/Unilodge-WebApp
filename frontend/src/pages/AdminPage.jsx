import { useState } from "react"
import AdminNavButtonOpen from "../components/Buttons/AdminNavButtonOpen";
import AdminNavButtonClose from "../components/Buttons/AdminNavButtonClose";
import { useParams } from "react-router-dom";
// import PlacesPage from "./PlacesPage";
import PropertyListings from "../components/PropertyListings";

const AdminPage = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    let { subpage } = useParams;
    if (subpage === undefined) {
        subpage = 'properties'
    }

    return (
        <>
            <div>
                {
                    sidebarOpen
                        ? (<AdminNavButtonOpen toggleClick={toggleSidebar} sidebarState={sidebarOpen} />)
                        : (<AdminNavButtonClose toggleClick={toggleSidebar} />)
                }
            </div>

            { subpage === 'properties' && (
                <PropertyListings />
            )}
        </>
    )
}

export default AdminPage