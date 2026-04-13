import React from 'react';
import HomeHeader from './HomeHader';
import HomeCard from './HomeCard';

const Homepage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HomeHeader />
            <HomeCard />
        </div>
    );
};

export default Homepage;