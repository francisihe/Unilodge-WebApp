import axios from "axios";
import PlaceImg from "./PlaceImg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PropertyListings = () => {

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/user-places').then(({ data }) => {
            setPlaces(data);
        });
    }, []);

    return (
        <div className="mt-4">
            {places.length > 0 && places.map(place => (
                <Link to={'/account/places/' + place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 my-4 rounded-2xl">
                    <div className="flex w-32 h-32 bg-gray-300 grow-0 shrink-0">
                        <PlaceImg place={place} />
                    </div>
                    <div className="grow-0 shrink">
                        <h2 className="text-xl">{place.title}</h2>
                        <p className="text-sm mt-2">{place.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default PropertyListings