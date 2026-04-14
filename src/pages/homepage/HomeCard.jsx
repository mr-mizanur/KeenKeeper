import React, { useState, useEffect } from "react";
import HomeCardinfo from "./HomeCardinfo";

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
        return <div className="text-center py-12 text-gray-500">
<span class="loading loading-bars loading-lg"></span>


        </div>;
    }

    return (
        <div className="max-w-6xl mx-auto px-6 pb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                My Friends Network
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {friends.map((friend) => (
                    <HomeCardinfo key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default HomeCard;