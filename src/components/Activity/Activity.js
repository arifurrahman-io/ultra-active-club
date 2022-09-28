import React, { useEffect, useState } from 'react';
import logo from '../../logo.png';
import './Activity.css';
import ActivityItem from '../ActivityItem/ActivityItem';
import Sidebar from '../Sidebar/Sidebar';

const Activity = () => {

    const [items, setItems] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const handleAddTime = (myTime) => {
        const newTime = [...time, myTime];
        setTime(newTime);
    }

    return (
        <div className='main-layout'>
            <div className='main-section'>
                <div className='header'>
                    <img src={logo} alt="" />
                    <h2>My Daily Activity</h2>
                </div>
                <h3>Select Today's Exercise</h3>
                <div className='items'>
                    {
                        items.map(item => <ActivityItem
                            key={item.id}
                            item={item}
                            handleAddTime={handleAddTime}
                        ></ActivityItem>)
                    }
                </div>
            </div>

            <div className='sidebar'>
                <Sidebar time={time}></Sidebar>
            </div>

        </div>
    );
};

export default Activity;