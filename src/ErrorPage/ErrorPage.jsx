import React from 'react';
import error from '../assets/error.png'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className=' w-10/12 mx-auto  min-h-screen flex flex-col justify-center items-center gap-5'>
            <div className="img w-64 h-64 space-y-4 flex flex-col justify-center items-center">
                <img className='object-cover' src={error} alt="error-image" />
                <h1 className='font-bold text-2xl'>Page Not found</h1>
                <NavLink to='/'>
                    <button className="group relative inline-flex items-center gap-3 px-10 py-3
                        text-lg font-bold tracking-wide rounded-full 
                        bg-linear-to-r from-purple-600 to-blue-600 
                        hover:from-purple-700 hover:to-blue-700
                        text-white shadow-2xl 
                        transform hover:scale-105 
                        transition-all duration-300 
                        overflow-hidden cursor-pointer">

                        <span className="relative z-10">Back to Home</span>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-r 
                            from-purple-500 to-blue-500 blur-xl 
                            opacity-60 group-hover:opacity-90 
                            scale-110 transition-all duration-500 -z-10"></div>

                        {/* Shine on Hover */}
                        <div className="absolute inset-0 rounded-full overflow-hidden -z-10">
                            <div className="absolute inset-0 bg-white opacity-0 
                                group-hover:opacity-20 -translate-x-full 
                                group-hover:translate-x-full 
                                transition-transform duration-1000 skew-x-12"></div>
                        </div>
                    </button>
                </NavLink>
                
            </div>
        </div>
    );
};

export default ErrorPage;