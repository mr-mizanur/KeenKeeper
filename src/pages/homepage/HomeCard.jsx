import React, { useState, useEffect } from "react";

const HomeCard = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data.friends);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching friends:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Loading friends...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pb-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        My Friends Network
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 p-6 text-center"
          >
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
                {friend.status === "almost due" ? "Almost Due" : friend.status.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;