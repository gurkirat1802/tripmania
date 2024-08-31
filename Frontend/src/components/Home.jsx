import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center space-y-4 mt-48 bg-slate-300 p-10">
                <Link
                    to="/loginadmin"
                    className="w-full max-w-xs py-4 px-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out text-center text-gray-800 font-medium text-lg"
                >
                    Admin
                </Link>
                <Link
                    to="/signup"
                    className="w-full max-w-xs py-4 px-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out text-center text-gray-800 font-medium text-lg"
                >
                    User
                </Link>
            </div>
        </>
    );
}

export default Home;