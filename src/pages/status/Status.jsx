import React, { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { MdAddCall, MdOutlineSms, MdDelete } from 'react-icons/md';
const Status = () => {

    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("timeline");
        if (saved) {
            setTimeline(JSON.parse(saved));
        }
    }, []);

    
    const count = {
        call: 0,
        sms: 0,
        video: 0
    };

    timeline.forEach(item => {
        if (count[item.type] !== undefined) {
            count[item.type]++;
        }
    });

    return (
        <div className="p-6 max-w-3xl mx-auto">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Status Dashboard
            </h2>

            
            <div className="grid grid-cols-3 gap-4">

                <div className="bg-white p-5 rounded-2xl shadow text-center">
                    <p className="text-3xl"><MdAddCall /></p>
                    <p className="text-xl font-bold">{count.call}</p>
                    <p className="text-gray-500">Calls</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow text-center">
                    <p className="text-3xl"><MdOutlineSms /></p>
                    <p className="text-xl font-bold">{count.sms}</p>
                    <p className="text-gray-500">SMS</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow text-center">
                    <p className="text-3xl"><FaCamera /></p>
                    <p className="text-xl font-bold">{count.video}</p>
                    <p className="text-gray-500">Video</p>
                </div>

            </div>

            <div className="mt-10 space-y-5">

                <div>
                    <p className="mb-1 font-medium">Call</p>
                    <div className="w-full bg-gray-200 h-3 rounded-full">
                        <div
                            className="bg-blue-500 h-3 rounded-full"
                            style={{ width: `${count.call * 15}%` }}
                        ></div>
                    </div>
                </div>

                <div>
                    <p className="mb-1 font-medium">SMS</p>
                    <div className="w-full bg-gray-200 h-3 rounded-full">
                        <div
                            className="bg-green-500 h-3 rounded-full"
                            style={{ width: `${count.sms * 15}%` }}
                        ></div>
                    </div>
                </div>

                <div>
                    <p className="mb-1 font-medium">Video</p>
                    <div className="w-full bg-gray-200 h-3 rounded-full">
                        <div
                            className="bg-yellow-500 h-3 rounded-full"
                            style={{ width: `${count.video * 15}%` }}
                        ></div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Status;