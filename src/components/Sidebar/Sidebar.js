import React from 'react';
import image from '../../client-1.png'
import './Sidebar.css'

const Sidebar = ({ time }) => {

    let total = 0;

    for (const interval of time) {
        let myTime = parseInt(interval.time);
        total = (total + myTime);
    }

    const grandTotal = parseFloat(total);
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
                <button className='break-button'><p>10s</p></button>
                <button className='break-button'><p>20s</p></button>
                <button className='break-button'><p>30s</p></button>
                <button className='break-button'><p>40s</p></button>
                <button className='break-button'><p>50s</p></button>
            </div>

            <div>
                <h4>Exercise Details</h4>
            </div>
            <div className='ex-time'>
                <div>Exercise time</div>
                <div><p>{total} minutes</p></div>
            </div>
        </div>
    );
};

export default Sidebar;