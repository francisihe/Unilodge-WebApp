import AdminSidebar from "../AdminSidebar"

const AdminNavButtonOpen = ({ toggleClick, sidebarState }) => {
  return (
    <>
      <div onClick={toggleClick} className="flex align-middle py-5 rounded-full">
        <div className="flex text-primary bg-gray-200 rounded-full p-2 border-2 border-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="text-black">&nbsp;Close Menu</span>
        </div>
      </div>

      {
        sidebarState
          ? (<AdminSidebar />) : ""
      }
    </>
  )
}

export default AdminNavButtonOpen