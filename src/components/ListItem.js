import React from 'react';

import './../css/ListItem.css';

const ListItem = (props) => {
    return (
        <li className="list-item" onClick={() => props.onSelect(props.id)}>
            <div className="list-item-image-wrapper">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="list-item-description-wrapper">
                <h3 className="heading heading--list-item">{props.title}</h3>
            </div>
        </li>
    );
}

export default ListItem;