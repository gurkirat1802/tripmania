import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Deletetrip = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/v1/viewtrip');
                if (response.ok) {
                    const data = await response.json();
                    setTrips(data.data);
                } else {
                    throw new Error('Failed to fetch trips');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/deletetrip/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    // Remove the deleted trip from the state
                    setTrips(trips.filter(trip => trip._id !== id));
                    alert("Trip Deleted Successfully!");
                    navigate('/admin/viewtrip');
                } else {
                    toast.error('Failed to delete the trip');
                }
            } else {
                toast.error('Trip deletion failed: ' + response.statusText);
            }
        } catch (error) {
            toast.error('Error deleting trip: ' + error.message);
        }
    };

    if (loading) return <p>Loading trips...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mt-20">
                Click on the trip you want to delete
            </h2>
            <div className="mx-auto mt-6 mb-10 max-w-md p-6 bg-white rounded-md shadow-md">
                {trips.length > 0 ? (
                    <ul>
                        {trips.map((trip) => (
                            <li
                                key={trip._id}
                                className="mb-4 p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
                                onClick={() => handleDelete(trip._id)}
                            >
                                <h3 className="text-xl font-semibold">{trip.title}</h3>
                                <p>{trip.desc}</p>
                                <p><strong>#</strong> {trip.hashtag1}</p>
                                <p><strong>#</strong> {trip.hashtag2}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No trips available</p>
                )}
            </div>
        </div>
    );
};

export default Deletetrip;