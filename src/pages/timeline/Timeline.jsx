import React, { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { MdAddCall, MdOutlineSms, MdDelete } from 'react-icons/md';

const Timeline = () => {

    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("timeline");
        if (saved) {
            setTimeline(JSON.parse(saved));
        }
    }, []);

    
    const handleDelete = (id) => {
        const updated = timeline.filter(item => item.id !== id);
        setTimeline(updated);
        localStorage.setItem("timeline", JSON.stringify(updated));
    };

    
    const handleClearAll = () => {
        setTimeline([]);
        localStorage.removeItem("timeline");
    };

    const actionLabels = {
        call: <><MdAddCall /> Call</>,
        sms: <><MdOutlineSms /> Text</>,
        video: <><FaCamera /> Video</>
    };

    if (timeline.length === 0) {
        return <p className="p-6">No timeline data</p>;
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">

            
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Timeline
                </h2>

                <button onClick={handleClearAll} className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm">
                    Clear All
                </button>
            </div>

            
            <div className="space-y-4">
                {timeline.map((item) => (
                    <div key={item.id} className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-start justify-between gap-4">

                           
                            <div>
                                <p className="text-gray-800 font-medium">
                                    {actionLabels[item.type]}{" "}
                                    <span className="text-gray-600 font-semibold">
                                        {item.name}
                                    </span>
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    {new Date(item.date).toLocaleString()}
                                </p>
                            </div>

                            
                            <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
                                {item.type}
                            </span>
                        </div>

                        
                        <div className="mt-4 flex justify-end">
                            <button onClick={() => handleDelete(item.id)} className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700">
                                <MdDelete /> Delete
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;