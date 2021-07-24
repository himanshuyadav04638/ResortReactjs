import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

function Loading(props) {
    return (
        <div className="loading">
         
            <img  src={loadingGif}   alt='' />
            <h4>rooms data Loading....</h4>
            
        </div>
    );
}

export default Loading;