import React, { useState, useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import { LuAlarmClockCheck } from 'react-icons/lu';
import { MdAddCall, MdAutoDelete, MdOutlineArchive, MdOutlineSms } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { id } = useParams();

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [friend, setFriend] = useState(null);

    const [timeline, setTimeline] = useState(() => {
        const saved = localStorage.getItem("timeline");
        return saved ? JSON.parse(saved) : [];
    });

   
    const handleAction = (type) => {

        const newEvent = {
            id: Date.now(),
            type,
            date: new Date(),
            name: friend?.name
        };

       
        const isDuplicate = timeline.some(
            item => item.type === type && item.name === friend?.name
        );

        if (isDuplicate) {
            toast.error("Already added in timeline ");
            return;
        }

        toast.success("Added to timeline ");

        const updated = [...timeline, newEvent];
        setTimeline(updated);
        localStorage.setItem("timeline", JSON.stringify(updated));
    };

    useEffect(() => {
        fetch("/friends.json")
            .then((res) => res.json())
            .then((data) => {
                setFriends(data.friends || []);

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

    if (loading) return <div>Loading...</div>;

    if (!friend) return (
        <div className="p-6 text-red-500 text-center">
            Friend not found!
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="flex flex-col lg:flex-row gap-8">

             
                <div className="lg:w-96 bg-white rounded-3xl shadow-xl p-8 text-center">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="w-32 h-32 mx-auto rounded-full"
                    />

                     <h1 className="text-2xl font-bold text-gray-800">
        {friend.name}
    </h1>

    <p className="text-sm text-gray-500 italic px-4">
        {friend.bio}
    </p>

    <p className="text-blue-600 font-medium">
        {friend.email}
    </p>
                    <div className="mt-6 space-y-3">
                        <button onClick={() => toast.error("Unable to snooze")} className="w-full border border-gray-200 py-2.5 rounded-xl flex justify-center items-center gap-2  bg-white text-gray-700 font-medium transition-all duration-300 ease-in-out shadow-sm hover:shadow-md active:scale-95">
    
                             <LuAlarmClockCheck className="text-lg" />
                             Snooze
                        </button>

                        <button onClick={() => toast.error("Unable to archive")} className="w-full border border-gray-200 py-2.5 rounded-xl flex justify-center items-center gap-2  bg-white text-gray-700 font-medium transition-all duration-300 ease-in-out shadow-sm hover:shadow-md active:scale-95">
                            <MdOutlineArchive /> Archive
                        </button>

                        <button onClick={() => toast.error("Unable to delete")} className="w-full border border-gray-200 py-2.5 rounded-xl flex justify-center items-center gap-2  bg-white text-gray-700 font-medium transition-all duration-300 ease-in-out shadow-sm hover:shadow-md active:scale-95">
                            <MdAutoDelete /> Delete
                        </button>
                    </div>
                </div>

                
                <div className="flex-1">
                    <div className="bg-white rounded-3xl shadow p-8">
                        <h3 className="text-xl mb-4">Quick Check-In</h3>

                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleAction("call")} className="bg-gray-100 p-5 rounded-2xl flex flex-col justify-center items-center gap-2
                                                                                    text-gray-700 font-medium
                                                                                    hover:bg-green-100 hover:text-green-600
                                                                                    transition-all duration-300 ease-in-out
                                                                                    shadow-sm hover:shadow-md active:scale-95">
                                <MdAddCall />
                                <p>Call</p>
                            </button>

                            <button onClick={() => handleAction("sms")} className="bg-gray-100 p-5 rounded-2xl flex flex-col justify-center items-center gap-2
                                                                                  text-gray-700 font-medium
                                                                                  hover:bg-green-100 hover:text-green-600
                                                                                  transition-all duration-300 ease-in-out
                                                                                  shadow-sm hover:shadow-md active:scale-95">
                                <MdOutlineSms />
                                <p>Text</p>
                            </button>

                            <button onClick={() => handleAction("video")} className="bg-gray-100 p-5 rounded-2xl flex flex-col justify-center items-center gap-2
                                                                                    text-gray-700 font-medium
                                                                                    hover:bg-green-100 hover:text-green-600
                                                                                    transition-all duration-300 ease-in-out
                                                                                    shadow-sm hover:shadow-md active:scale-95">
                                <FaCamera />
                                <p>Video</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;