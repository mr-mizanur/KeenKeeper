import React, { useEffect, useState } from 'react';
import { FaCamera, FaChevronDown, FaCheck } from 'react-icons/fa';
import { MdAddCall, MdOutlineSms, MdDelete, MdFilterNone } from 'react-icons/md';
import { toast } from 'react-toastify';

const Timeline = () => {
    const [timeline, setTimeline] = useState([]);
    const [filter, setFilter] = useState("all");
    const [isOpen, setIsOpen] = useState(false); // ড্রপডাউন কন্ট্রোল করার জন্য

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

    // ফিল্টারিং লজিক
    const filteredTimeline = timeline.filter(item => {
        if (filter === "all") return true;
        return item.type === filter;
    });

    const actionLabels = {
        call: <><MdAddCall /> Call</>,
        sms: <><MdOutlineSms /> Text</>,
        video: <><FaCamera /> Video</>
    };

    // ড্রপডাউন অপশনসমূহ
    const options = [
        { label: 'Filter timeline', value: 'all' },
        { label: 'Text', value: 'sms' },
        { label: 'Call', value: 'call' },
        { label: 'Video', value: 'video' },
    ];

    if (timeline.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[300px] text-center bg-gray-50 border border-gray-200 rounded-2xl p-8">
                <div className="text-5xl mb-3"> <MdFilterNone /> </div>
                <h2 className="text-xl font-bold text-gray-800">No Timeline Data</h2>
                <p className="text-gray-500 mt-2 text-sm">Start adding calls, SMS, or video check-ins to see your activity here.</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                
                {/* --- কাস্টম ফিল্টার ড্রপডাউন --- */}
                <div className="relative inline-block text-left w-56">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none"
                    >
                        <span className="flex items-center gap-2">
                             {filter !== 'all' && <FaCheck className="text-[10px] text-gray-400" />}
                             {options.find(opt => opt.value === filter)?.label}
                        </span>
                        <FaChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                        <div className="absolute left-0 z-10 w-full mt-2 origin-top-left bg-white border border-gray-100 rounded-xl shadow-xl outline-none overflow-hidden">
                            <div className="py-1">
                                {options.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            setFilter(option.value);
                                            setIsOpen(false);
                                        }}
                                        className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="w-5">
                                            {filter === option.value && <FaCheck className="text-gray-400 text-xs" />}
                                        </span>
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <button 
                    onClick={() => { toast.success("Delete All"); handleClearAll(); }}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium"
                >
                    Clear All
                </button>
            </div>

            <div className="space-y-4">
                {filteredTimeline.length > 0 ? (
                    filteredTimeline.map((item) => (
                        <div key={item.id} className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-gray-800 font-medium flex items-center gap-2">
                                        {actionLabels[item.type]}{" "}
                                        <span className="text-gray-600 font-semibold">
                                            {item.name}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {new Date(item.date).toLocaleString()}
                                    </p>
                                </div>
                                <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium capitalize">
                                    {item.type}
                                </span>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <button 
                                    onClick={() => { toast.success("Delete done"); handleDelete(item.id); }} 
                                    className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700"
                                >
                                    <MdDelete /> Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-gray-400 italic">
                        No {filter} activities found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;