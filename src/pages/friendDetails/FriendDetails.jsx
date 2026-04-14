import React, { useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import { LuAlarmClockCheck } from 'react-icons/lu';
import { MdAddCall, MdAutoDelete, MdOutlineArchive, MdOutlineSms } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { id } = useParams(); // Get the friend ID from URL
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch("/friends.json")
            .then((res) => res.json())
            .then((data) => {
                setFriends(data.friends || []);
                
                // Find the specific friend by ID
                if (data.friends && id) {
                    const foundFriend = data.friends.find(f => f.id === id || f.id === Number(id));
                    setFriend(foundFriend);
                }
                
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching friends:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading friend details...</div>;
    if (!friend) return <div>Friend not found!</div>;

    return (
      <div className="max-w-6xl mx-auto p-6">
            <div className="flex flex-col lg:flex-row gap-8">

                
                <div className="lg:w-96 bg-white rounded-3xl shadow-xl p-8 text-center">
                    <div className="flex justify-center">
                        <img 
                            src={friend.picture} 
                            alt={friend.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                        />
                    </div>

                    <h1 className="text-3xl font-semibold mt-5 text-gray-800">{friend.name}</h1>

                    <div className="inline-block bg-red-500 text-white text-sm font-medium px-5 py-1 rounded-full mt-3">
                        Overdue
                    </div>

                    <div className="flex justify-center gap-3 mt-5">
                        {friend.interests?.map((interest, i) => (
                            <span key={i}className="bg-green-500 text-white text-sm px-4 py-1 rounded-full">
                                {interest}
                            </span>
                        ))}
                    </div>

                    <p className="mt-6 text-gray-600 italic leading-relaxed">
                        {friend.bio}
                    </p>

                    <p className="text-blue-600 mt-4 font-medium">{friend.email}</p>

                    
                    <div className="mt-8 space-y-3">
                        <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 py-3 rounded-2xl font-medium flex items-center justify-center gap-2">
                            <LuAlarmClockCheck></LuAlarmClockCheck> Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 py-3 rounded-2xl font-medium flex items-center justify-center gap-2">
                            <MdOutlineArchive></MdOutlineArchive> Archive
                        </button>
                        <button className="w-full bg-white border border-red-300 text-red-600 hover:bg-red-50 py-3 rounded-2xl font-medium flex items-center justify-center gap-2">
                            <MdAutoDelete></MdAutoDelete> Delete
                        </button>
                    </div>
                </div>

                
                <div className="flex-1 space-y-6">

                   
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-3xl shadow p-6 text-center">
                            <h3 className="text-4xl font-bold text-gray-800">45</h3>
                            <p className="text-gray-500 mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white rounded-3xl shadow p-6 text-center">
                            <h3 className="text-4xl font-bold text-gray-800">30</h3>
                            <p className="text-gray-500 mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white rounded-3xl shadow p-6 text-center">
                            <h3 className="text-3xl font-bold text-gray-800">May 10, 2026</h3>
                            <p className="text-gray-500 mt-1">Next Due</p>
                        </div>
                    </div>

                    
                    <div className="bg-white rounded-3xl shadow p-8 flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Relationship Goal</h3>
                            <p className="text-gray-600 mt-1">
                                Connect every <span className="font-semibold text-gray-800">30 days</span>
                            </p>
                        </div>
                        <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-2xl font-medium">
                            Edit
                        </button>
                    </div>

                   
                    <div className="bg-white rounded-3xl shadow p-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-5">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 py-8 rounded-3xl transition-all">
                                <MdAddCall></MdAddCall>
                                <span className="mt-3 font-medium">Call</span>
                            </button>
                            <button className="flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 py-8 rounded-3xl transition-all">
                                <MdOutlineSms></MdOutlineSms>
                                <span className="mt-3 font-medium">Text</span>
                            </button>
                            <button className="flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 py-8 rounded-3xl transition-all">
                                <FaCamera></FaCamera>
                                <span className="mt-3 font-medium">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;