import React from 'react';
import Banner from '../../Pages/Home/Banner';
import HomeTitle from '../../Pages/Home/HomeTitle';
import ContestDetails from '../../Pages/ContestDetails/ContestDetails';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTitle></HomeTitle>
            {/* <ContestDetails></ContestDetails> */}
            <h1>Home</h1>
        </div>
    );
};

export default Home;