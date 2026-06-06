import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[80vh] items-center justify-center'>
           Course Data Loading
            <span className="loading loading-spinner loading-5xl"></span>
        </div>
    );
};

export default LoadingPage;