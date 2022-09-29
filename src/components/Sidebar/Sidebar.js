import { useState } from 'react';
import image from '../../client-1.png'
import './Sidebar.css'



const Sidebar = ({ time }) => {



    let total = 0;
    for (const interval of time) {
        let myTime = parseInt(interval.time);
        total = (total + myTime);
    }

    const notify = () => {
        alert('Great! You have completed all activities.')
    }

    const [count, setCount] = useState(0);


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
                <button onClick={() => setCount(1)} className='break-button'><p><span id='brk-time1'>1m</span></p></button>
                <button onClick={() => setCount(2)} className='break-button'><p><span id='brk-time2'>2m</span></p></button>
                <button onClick={() => setCount(3)} className='break-button'><p><span id='brk-time3'>3m</span></p></button>
                <button onClick={() => setCount(4)} className='break-button'><p><span id='brk-time4'>4m</span></p></button>
                <button onClick={() => setCount(5)} className='break-button'><p><span id='brk-time5'>5m</span></p></button>
            </div>

            <div>
                <h4>Exercise Details</h4>
            </div>
            <div className='ex-time'>
                <div><p>Exercise time</p></div>
                <div><p>{total} minutes</p></div>
            </div>

            <div className='break-time'>
                <div><p>Exercise time</p></div>
                <div><p>{count} minutes</p></div>
            </div>

            <div className='activityDone'>
                <button onClick={notify} className='activityDoneBtn'>
                    <p>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;