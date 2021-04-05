import React from 'react';

const Stars = ({id, name, image, as}) => {
    return (
        <div className="stars">
            <img src={image} alt="" className="star"/>
            <h3>{name}</h3>
            <h4>As :{as}</h4>
        </div>
    );
}

export default Stars;
