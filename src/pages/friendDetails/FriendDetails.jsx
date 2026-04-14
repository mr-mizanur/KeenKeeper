import React, { useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import { LuAlarmClockCheck } from 'react-icons/lu';
import { MdAddCall, MdAutoDelete, MdOutlineArchive, MdOutlineSms, MdVideoCall } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [friend, setFriend] = useState(null);
    const [timeline, setTimeline] = useState(() => {
        const saved = localStorage.getItem("timeline");
        return saved ? JSON.parse(saved) : [];
});

    const handleAction = (type) => {
        // ডুপ্লিকেট চেক
        const isDuplicate = timeline.some(
            item => item.type === type && item.name === friend?.name
        );

        if (isDuplicate) {
            toast.error(`Already added ${type} in timeline for ${friend?.name}`);
            return;
        }

        
        switch (type) {
            case 'call':
                toast.success(`Started call with ${friend?.name}`);
                break;
            case 'sms':
                toast.success(`Sent text message to ${friend?.name}`);
                break;
            case 'video':
                toast.success(`Started video call with ${friend?.name}`);
                break;
            default:
                toast.success(`Action logged for ${friend?.name}`);
        }

        const newEvent = {
            id: Date.now(),
            type,
            date: new Date(),
            name: friend?.name
        };

        const updated = [...timeline, newEvent];
        setTimeline(updated);
        localStorage.setItem("timeline", JSON.stringify(updated));
    };

    useEffect(() => {
        fetch("/friends.json")
            .then((res) => res.json())
            .then((data) => {
                if (data.friends && id) {
                    const foundFriend = data.friends.find(
                        f => f.id === id || f.id === Number(id)
                    );
                    setFriend(foundFriend);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching friends:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-20">Loading...</div>;

    if (!friend) return (
        <div className="p-6 text-red-500 text-center font-bold">
            Friend not found!
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto p-6 mt-10">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Left Profile Card */}
                <div className="lg:w-1/3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white shadow-md"
                    />

                    <h1 className="text-2xl font-bold text-gray-800 mt-4 leading-tight">
                        {friend.name}
                    </h1>
                    
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mt-1">
                        Almost due
                    </span>

                    <div className="flex justify-center gap-2 mt-3">
                        <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-3 py-0.5 rounded-full">Gaming</span>
                        <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-3 py-0.5 rounded-full">Fitness</span>
                    </div>

                    <p className="text-sm text-gray-500 italic mt-4 px-2 leading-relaxed">
                        "{friend.bio}"
                    </p>

                    <p className="text-gray-400 text-xs mt-3">
                        {friend.email}
                    </p>

                    <div className="mt-8 space-y-2">
                        <button onClick={() => toast.info("Snoozed for 2 weeks")} className="w-full border border-gray-100 py-3 rounded-xl flex justify-center items-center gap-2 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-all duration-200">
                             <LuAlarmClockCheck className="text-lg" /> Snooze 2 Weeks
                        </button>

                        <button onClick={() => toast.error("Archive disabled")} className="w-full border border-gray-100 py-3 rounded-xl flex justify-center items-center gap-2 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-all duration-200">
                            <MdOutlineArchive className="text-lg" /> Archive
                        </button>

                        <button onClick={() => toast.error("Delete disabled")} className="w-full border border-gray-100 py-3 rounded-xl flex justify-center items-center gap-2 bg-white text-red-500 font-semibold text-sm hover:bg-red-50 transition-all duration-200">
                            <MdAutoDelete className="text-lg" /> Delete
                        </button>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 w-full space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <h2 className="text-3xl font-bold text-gray-800">28</h2>
                            <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <h2 className="text-3xl font-bold text-gray-800">21</h2>
                            <p className="text-gray-500 text-sm mt-1">Goal(Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
                            <h2 className="text-2xl font-bold text-green-800">April 26, 2026</h2>
                            <p className="text-gray-500 text-sm mt-1">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-gray-800 text-lg">Relationship Goal</h3>
                            <p className="text-gray-600">Connect every <span className="font-bold text-black">21 days</span></p>
                        </div>
                        <button className="border border-gray-200 px-6 py-2 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all">
                            Edit
                        </button>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Quick Check-In</h3>

                        <div className="grid grid-cols-3 gap-6">
                            <button onClick={() => handleAction("call")} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col justify-center items-center gap-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 shadow-sm active:scale-95 group">
                                <MdAddCall className="text-3xl text-gray-400 group-hover:text-green-500" />
                                <p className="font-semibold">Call</p>
                            </button>

                            <button onClick={() => handleAction("sms")} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col justify-center items-center gap-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 shadow-sm active:scale-95 group">
                                <MdOutlineSms className="text-3xl text-gray-400 group-hover:text-green-500" />
                                <p className="font-semibold">Text</p>
                            </button>

                            <button onClick={() => handleAction("video")} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col justify-center items-center gap-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 shadow-sm active:scale-95 group">
                                <MdVideoCall className="text-3xl text-gray-400 group-hover:text-green-500" />
                                <p className="font-semibold">Video Call</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;