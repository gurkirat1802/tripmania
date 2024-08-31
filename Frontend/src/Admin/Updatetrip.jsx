import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Updatetrip = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Update Trips</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                {trips.length > 0 ? (
                    <ul className="space-y-6">
                        {trips.map((trip) => (
                            <Link
                                to={`/admin/update/${trip._id}`}
                                key={trip._id}
                                className="block p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-white hover:bg-gray-50"
                            >
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl font-semibold text-gray-800">{trip.title}</h3>
                                    <p className="text-gray-700">{trip.desc}</p>
                                    <div className="flex flex-wrap gap-2 text-sm">
                                        <p className="text-indigo-600 font-medium">
                                            <strong>#</strong> {trip.hashtag1}
                                        </p>
                                        <p className="text-indigo-600 font-medium">
                                            <strong>#</strong> {trip.hashtag2}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-600">No trips available</p>
                )}
            </div>
        </div>
    );
};

export default Updatetrip;