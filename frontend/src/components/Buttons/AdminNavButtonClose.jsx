
const AdminNavButtonClose = ({toggleClick}) => {
    return (
        <div onClick={toggleClick} className="flex align-middle py-5 rounded-full">
            <div className="flex text-primary bg-orange-200 rounded-full p-2 border-2 border-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                <span className="text-black">&nbsp;Admin Panel</span>
            </div>
        </div>
    )
}

export default AdminNavButtonClose