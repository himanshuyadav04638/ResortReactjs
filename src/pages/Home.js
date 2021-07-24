import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRoom from '../Components/FeaturedRoom';




const Home=()=> {
    return (
        <>
       
       <Hero>
           <Banner title="Luxious rooms" subtitle="deluxe rooms starting at ₹19,999/-">
               <Link to='/room' className="btn-primary" >
                   Our rooms
               </Link>
               

           </Banner>

       </Hero>
       <FeaturedRoom />
       <Services/>

      
      
      
       

       </>
       
       
           
       
    );
}

export default Home;