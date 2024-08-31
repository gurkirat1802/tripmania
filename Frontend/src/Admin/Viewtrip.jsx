import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewTrips = () => {
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

    if (loading) return <p>Loading trips...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                View Trips
            </h2>
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                {trips.length > 0 ? (
                    <ul className="space-y-4">
                        {trips.map((trip) => (
                            <Link
                                to={`/viewtrip/detail/${trip._id}`}
                                key={trip._id}
                                className="block p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {trip.title}
                                </h3>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-600">No trips available</p>
                )}
            </div>
            <button
                onClick={()=>{
                    navigate('/admin/createtrip');
                }}
                className="py-2 mt-6 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 ml-60"
            >
                Create Another Trip
            </button>
        </div>
    );
};

export default ViewTrips;