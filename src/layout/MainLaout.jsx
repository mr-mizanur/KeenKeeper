import React from 'react';
import Navbar from '../component/shard/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/shard/Footer/Footer';


const MainLaout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLaout;