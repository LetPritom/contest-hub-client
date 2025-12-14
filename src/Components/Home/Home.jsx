import React from 'react';
import Banner from '../../Pages/Home/Banner';
import HomeTitle from '../../Pages/Home/HomeTitle';
import ContestDetails from '../../Pages/ContestDetails/ContestDetails';
import ConstestCard from '../../Pages/Components/ConstestCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTitle></HomeTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             <ConstestCard></ConstestCard>
            </div>
           
            {/* <ContestDetails></ContestDetails> */}
            <h1>Home</h1>
        </div>
    );
};

export default Home;