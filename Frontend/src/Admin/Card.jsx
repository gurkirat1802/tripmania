import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                        {props.desc}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.hash1}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.hash2}</span>
                </div>
            </div>
        </>
    );
}

export default Card;