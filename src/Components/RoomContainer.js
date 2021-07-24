import React from 'react';
import RoomFilter from './RoomFilter.js'
import RoomList from './RoomList'


function RoomContainer(props) {
    return (
        <div>
            hello room Container
            <RoomFilter/>
            <RoomList/>
        </div>
    );
}

export default RoomContainer;