import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewtripUser = () => {
    const { id } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/viewtripuser/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setTrip(data.data);
                    // Assuming comments are part of the trip data
                    setComments(data.data.comments || []);
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

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value, 10));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/v1/addcomment/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment: newComment, rating }),
            });

            if (response.ok) {
                const data = await response.json();
                setComments((prevComments) => [...prevComments, { comment: newComment, rating }]);
                setNewComment('');
                setRating(0);
            } else {
                throw new Error('Failed to submit comment');
            }
        } catch (error) {
            setError(error.message);
        }
    };

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

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Your Comment and Rating</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="mb-4">
                                <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">Rating:</label>
                                <select
                                    id="rating"
                                    value={rating}
                                    onChange={handleRatingChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                >
                                    <option value="">Select rating</option>
                                    {[1, 2, 3, 4, 5].map((r) => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">Comment:</label>
                                <textarea
                                    id="comment"
                                    value={newComment}
                                    onChange={handleCommentChange}
                                    rows="4"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
                        {comments.length > 0 ? (
                            <ul className="space-y-4">
                                {comments.map((c, index) => (
                                    <li key={index} className="p-4 border border-gray-300 rounded-md">
                                        <p className="text-gray-700 mb-2"><strong>Rating:</strong> {c.rating}</p>
                                        <p className="text-gray-700">{c.comment}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-center text-gray-600">No comments yet</p>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">Trip details not found</p>
            )}
        </div>
    );
}

export default ViewtripUser;