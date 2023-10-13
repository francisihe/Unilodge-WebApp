import './App.css'
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage.jsx";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";
import AdminPage from './pages/AdminPage';
import PropertyListings from './components/PropertyListings';
import PropertyFormPage from './pages/PropertyFormPage.jsx'
import PropertyPage from './pages/PropertyPage.jsx'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/place/:id" element={<PlacePage />} />
            
            <Route path="/account" element={<ProfilePage />} />
            <Route path="/account/places" element={<PlacesPage />} />
            <Route path="/account/places/new" element={<PlacesFormPage />} />
            <Route path="/account/places/:id" element={<PlacesFormPage />} />
            
            <Route path="/account/bookings" element={<BookingsPage />} />
            <Route path="/account/bookings/:id" element={<BookingPage />} />

            <Route path="/properties/:id" element={<PropertyPage />} />

            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/properties" element={<PropertyListings />} />
            <Route path="/admin/properties/new" element={<PropertyFormPage />} />
            <Route path="/admin/properties/:id" element={<PropertyFormPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
