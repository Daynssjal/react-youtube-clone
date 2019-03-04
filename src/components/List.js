import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    
    if (props.videos === null) {
        return (
            <div>Loading...</div>
        );
    } else {
        return (
            <div className="container container--list">
                <h3 className="heading heading--list">Related videos</h3>
                <ul className="list">
                    {props.videos.map(video => {
                        return (
                       <ListItem key={video.etag}
                            onSelect={props.onSelect}
                            id={video.id.videoId}
                            title={video.snippet.title}
                            image={video.snippet.thumbnails.default.url}
                       />  
                    )})}
                </ul>
            </div>
        );
    }
}

export default List;