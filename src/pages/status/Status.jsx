import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const FriendshipAnalytics = () => {
    const [timeline, setTimeline] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null); // ক্লিক করা স্লাইস মনে রাখার জন্য

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
        if (item.type === 'sms' || item.type === 'text') {
            count.sms++;
        } else if (count[item.type] !== undefined) {
            count[item.type]++;
        }
    });

    const chartData = [
        { name: 'Call', value: count.call, color: '#2D5F4D' }, 
        { name: 'Text', value: count.sms, color: '#8B5CF6' }, 
        { name: 'Video', value: count.video, color: '#44A66C' } 
    ];

    const hasData = timeline.length > 0;

    // স্লাইসে ক্লিক করলে ইনডেক্স সেট হবে
    const onPieClick = (_, index) => {
        setActiveIndex(index);
    };

    const renderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <div className="flex justify-center gap-6 mt-6">
                {payload.map((entry, index) => (
                    <div key={`item-${index}`} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: entry.payload.color }} />
                        <span className="text-sm font-medium text-gray-700">{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-8 text-black">Friendship Analytics</h1>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <p className="text-sm font-bold text-[#2D5F4D] mb-2">By Interaction Type</p>

                {/* চার্ট কন্টেইনার */}
                <div className="h-80 w-full relative">
                    {hasData ? (
                        <>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%" 
                                        innerRadius={70} 
                                        outerRadius={100} 
                                        paddingAngle={8} 
                                        dataKey="value"
                                        cornerRadius={10}
                                        startAngle={90} 
                                        endAngle={450}
                                        onClick={onPieClick} // ক্লিক ইভেন্ট
                                        style={{ cursor: 'pointer', outline: 'none' }}
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={entry.color} 
                                                // সিলেক্ট করলে বর্ডার দেখাবে
                                                stroke={activeIndex === index ? "#fff" : "none"}
                                                strokeWidth={4}
                                                style={{ outline: 'none' }}
                                            />
                                        ))}
                                    </Pie>
                                    <Legend content={renderCustomLegend} verticalAlign="bottom" />
                                </PieChart>
                            </ResponsiveContainer>

                            {/* --- চার্টের ঠিক মাঝখানে ডাটা দেখানোর অংশ --- */}
                            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                {activeIndex !== null ? (
                                    <div className="animate-in zoom-in duration-300">
                                        <p className="text-4xl font-black text-gray-800 leading-none">
                                            {chartData[activeIndex].value}
                                        </p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">
                                            {chartData[activeIndex].name}s
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                                        Select Slice
                                    </p>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-400 italic">No interaction data available yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FriendshipAnalytics;