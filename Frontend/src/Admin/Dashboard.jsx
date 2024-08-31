import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="flex items-center space-x-20 p-4 mt-48 ml-20">
                <Link
                    to="/admin/createtrip"
                    className="w-48 py-2 px-4 text-center text-base font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create a Trip Plan
                </Link>
                <Link
                    to="/admin/viewtrip"
                    className="w-48 py-2 px-4 text-center text-base font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    View a Trip Plan
                </Link>
                <Link
                    to="/admin/updatetrip"
                    className="w-48 py-2 px-4 text-center text-base font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Update a Trip Plan
                </Link>
                <Link
                    to="/admin/deletetrip"
                    className="w-48 py-2 px-4 text-center text-base font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Delete a Trip Plan
                </Link>
            </div>

        </>
    );
}

export default Dashboard;