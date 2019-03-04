import React from 'react';

import './../css/Detail.css';

const Detail = (props) => {
    
    if (props.selected === null) { 
        return ( 
            <div>Loading...</div>
        );
    }
   else {
        const id = props.selected.id.videoId;
        const url = `https://www.youtube.com/embed/${id}`;

        return (
            <div className="container container--detail">
                <div className="detail-video-wrapper">
                    <iframe src={url} frameBorder="0" title={props.selected.snippet.title}
                            allow="autoplay; encrypted-media"
                            allowFullScreen>
                    </iframe>
                </div>
                <div className="detail-description-wrapper">
                    <h2 className="heading heading--detail">{props.selected.snippet.title}</h2>
                    <p>Channel: {props.selected.snippet.channelTitle}</p>
                    <p>Description: {props.selected.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default Detail;