import React from "react";
import { Link } from "react-router";

const HomeCardinfo = ({ friend }) => {
    return (
        <Link to={`/friendDetails/${friend.id}`} className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 p-6 text-center">
            <div className="flex justify-center -mt-4">
                <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {friend.name}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
                {friend.days_since_contact} days ago
            </p>

            <div className="flex justify-center gap-2 mt-5">
                {friend.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-emerald-100 text-emerald-700 text-xs font-medium px-4 py-1.5 rounded-full"
                    >
                        {tag.toUpperCase()}
                    </span>
                ))}
            </div>

            <div className="mt-6">
                <span
                    className={`inline-block px-6 py-2 text-sm font-semibold rounded-full ${
                        friend.status === "overdue"
                            ? "bg-red-100 text-red-600"
                            : friend.status === "almost due"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-green-100 text-green-600"
                    }`}
                >
                    {friend.status === "almost due" 
                        ? "Almost Due" 
                        : friend.status.toUpperCase()}
                </span>
            </div>
        </Link>
    );
};

export default HomeCardinfo;