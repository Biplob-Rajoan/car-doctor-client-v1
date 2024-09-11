import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mt-3'>
            <h2><br /></h2>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            
        </div>
    );
};

export default Home;