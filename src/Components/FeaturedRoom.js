import React, { Component } from 'react';
import Loading from './Loading'
import Room from './Room'
import Title from './Title.js'


import {RoomContext} from '../context'

class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        let {loading,featuredRoom:rooms}=this.context;
         rooms=rooms.map(room=>{
             return <Room key={room.id} room={room}/>
         })
       
        return (
          <section className="featured-rooms">
              <Title title="featured room" />
              <div className="featured-rooms-center">
                  {loading ?<Loading/> : rooms}
              </div>
              
  
          </section>
        );
    }
}

export default FeaturedRoom;