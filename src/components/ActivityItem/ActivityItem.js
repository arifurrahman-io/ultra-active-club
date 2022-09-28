import React from 'react';
import './ActivityItem.css'

const ActivityItem = ({ item, handleAddTime }) => {
    console.log(item);
    const { picture, name, age, time, about } = item;

    return (
        <div className='card'>
            <img src={picture} alt="" />
            <div className='card-info'>
                <h3>{name}</h3>
                <h5>Age Limit: {age}</h5>
                <p>Time requared: {time} minute(s)</p>
                <p>{about}</p>
            </div>
            <button onClick={() => handleAddTime(item)} className='item-button'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default ActivityItem;