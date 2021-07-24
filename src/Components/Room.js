import React from 'react';
import {Link} from 'react-router-dom'
import defaulImg from '../images/room-1.jpeg'
import PropType from "prop-types"
 
function Room({room}) {
    const {name,slug,images,price}=room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaulImg} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/room/${slug}`} className="btn-primary room-link"  >Features</Link>


            </div>
            <p className="room-info">{name}</p>

        </article>
    );
}
Room.PropType={
    room:PropType.shape(
{
    name:PropType.string.isRequired,
    slug:PropType.string.isRequired,
    image:PropType.arrayOf(PropType.string).isRequired,
    price:PropType.number.isRequired,


}
    )
}

export default Room;