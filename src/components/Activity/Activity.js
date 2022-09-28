import React, { useEffect, useState } from 'react';
import logo from '../../logo.png';
import './Activity.css';
import ActivityItem from '../ActivityItem/ActivityItem';

const Activity = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className='main-layout'>
            <div className='main-section'>
                <div className='header'>
                    <img src={logo} alt="" />
                    <h2>My Daily Activity</h2>
                </div>
                <div className='items'>
                    {
                        items.map(item => <ActivityItem
                            key={item.id}
                            item={item}
                        ></ActivityItem>)
                    }
                </div>
            </div>

            <div className='sidebar'>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Activity;