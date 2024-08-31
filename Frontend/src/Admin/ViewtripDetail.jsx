import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewtripDetail = () => {
    const { id } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/viewtrip/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setTrip(data.data);
                } else {
                    throw new Error('Failed to fetch trip details');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrip();
    }, [id]);

    if (loading) return <p>Loading trip details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mx-auto p-4 mt-20">
            {trip ? (
                <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {trip.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{trip.desc}</p>
                    <div className="flex flex-wrap gap-2 text-sm mb-4">
                        <p className="text-indigo-600 font-medium">
                            <strong>#</strong> {trip.hashtag1}
                        </p>
                        <p className="text-indigo-600 font-medium">
                            <strong>#</strong> {trip.hashtag2}
                        </p>
                    </div>
                    <button
                        onClick={() => window.history.back()}
                        className="py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                    >
                        Back to Trips
                    </button>
                </div>
            ) : (
                <p className="text-center text-gray-600">Trip details not found</p>
            )}
        </div>
    );
}

export default ViewtripDetail;