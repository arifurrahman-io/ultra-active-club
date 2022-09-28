import React from 'react';
import image from '../../client-1.png'
import './Sidebar.css'

const Sidebar = ({ time }) => {

    let total = 0;

    for (const interval of time) {
        let myTime = parseInt(interval.time);
        total = (total + myTime);
    }

    return (
        <div>
            <div className='my-info'>
                <img src={image} alt="" />
                <div className='my-name'>
                    <p>Md Arifur Rahman</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='personal-info'>
                <div className='physical-info'>
                    <h3>88 kg</h3>
                    <p>Weight</p>
                </div>
                <div className='physical-info'>
                    <h3>176 cm</h3>
                    <p>Hight</p>
                </div>
                <div className='physical-info'>
                    <h3>32 yrs</h3>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h4>Add a Break</h4>
            </div>
            <div className='break-buttons'>
                <button className='break-button'><p><span id='brk-time1'>10</span></p></button>
                <button className='break-button'><p><span id='brk-time2'>20</span></p></button>
                <button className='break-button'><p><span id='brk-time3'>30</span></p></button>
                <button className='break-button'><p><span id='brk-time4'>40</span></p></button>
                <button className='break-button'><p><span id='brk-time5'>50</span></p></button>

            </div>

            <div>
                <h4>Exercise Details</h4>
            </div>
            <div className='ex-time'>
                <div><p>Exercise time</p></div>
                <div><p>{total} minutes</p></div>
            </div>
        </div>
    );
};

export default Sidebar;