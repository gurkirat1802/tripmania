import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Createtrip = () => {
    const [tripData, setTripData] = useState({
        title: '',
        desc: '',
        hashtag1: '',
        hashtag2: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTripData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/v1/createtrip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tripData)
            });

            if (response.ok) {
                const data = await response.json();
                if (data) {
                    toast.success('Trip created successfully!');
                    navigate('/admin/viewtrip');
                } else {
                    toast.error('Empty response received after trip creation');
                }
            } else {
                toast.error('Trip creation failed: ' + response.statusText);
            }
        } catch (error) {
            toast.error('Error creating trip: ' + error.message);
        }
    };
    
    return (
        <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mt-20">Create a Trip Plan</h2>
            <div className="mx-auto mt-6 mb-10 max-w-md p-6 bg-white rounded-md shadow-md">
                <form className="space-y-6 top-20" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={tripData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="desc" className="block text-gray-700 font-medium mb-2">Description:</label>
                        <textarea
                            id="desc"
                            name="desc"
                            rows="3"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={tripData.desc}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hashtag1" className="block text-gray-700 font-medium mb-2">Hashtag 1:</label>
                        <input
                            type="text"
                            id="hashtag1"
                            name="hashtag1"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={tripData.hashtag1}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hashtag2" className="block text-gray-700 font-medium mb-2">Hashtag 2:</label>
                        <input
                            type="text"
                            id="hashtag2"
                            name="hashtag2"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={tripData.hashtag2}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default Createtrip;