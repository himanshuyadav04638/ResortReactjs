import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import RoomContainer from '../Components/RoomContainer';


const Room=()=>{
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our Rooms" subtitle="get know">
            </Banner>

        </Hero>
        <RoomContainer />
        </>
    );
}

export default Room;

//room container 3.15//