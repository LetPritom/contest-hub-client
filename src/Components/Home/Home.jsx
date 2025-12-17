import React from 'react';
import Banner from '../../Pages/Home/Banner';
import HomeTitle from '../../Pages/Home/HomeTitle';
import ContestDetails from '../../Pages/ContestDetails/ContestDetails';
import ConstestCard from '../../Pages/Components/ConstestCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoaderSpinner from '../Loader/LoaderSpinner';

const Home = () => {

    const {data: contests = [] , isPending } = useQuery({
        queryKey:['contest'] ,
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/approve-contest`)
            return result.data;

        }
    })

    if(isPending) return <LoaderSpinner></LoaderSpinner>;

    return (
        <div>
            <Banner></Banner>
            <HomeTitle></HomeTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    contests.map((contest , i) => <ConstestCard contest={contest} key={i}></ConstestCard> )
                }



            </div>
           
            {/* <ContestDetails></ContestDetails> */}
        </div>
    );
};

export default Home;