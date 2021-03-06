import React, { Component } from 'react';
import items from './data'


const RoomContext=React.createContext();


class RoomProvider extends Component {
    state={rooms:[],sortedRooms:[],featuredRoom:[],loading:true}

    //getdata//
componentDidMount(){
    let rooms=this.FormatData(items)
    let featuredRoom=rooms.filter(room=>room.featured===true);
    this.setState({rooms,featuredRoom,sortedRooms:rooms,loading:false})
}

FormatData(items){
    let tempItems=items.map(item=>{
        let id=item.sys.id;
        let images=item.fields.images.map(image=>image.fields.file.url)

        let room={...item.fields,images,id}
        return room;
    });
    return tempItems;
}
 getRoom=(slug)=>{
     let tempRoom=[...this.state.rooms];
     const room =tempRoom.find(room=>room.slug===slug);
     return room;

}
    
    


 

   

  


    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom}}>
                {this.props.children}

            </RoomContext.Provider>
        );
    }
}
const RoomConsumer=RoomContext.Consumer;


export {RoomProvider,RoomConsumer,RoomContext};