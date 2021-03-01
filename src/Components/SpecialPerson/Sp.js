import React, { useState } from 'react';
import './Sp.css'

const Sp = (props) => {
    const sp=props.special;
    return (
        <div>
            {
                sp.map(s => (
                    <div className='sp-details'>
                        <img src={s.img} alt=""/>
                        <h3>Full Name: {s.first_name+' '+s.last_name}</h3>
                        <p>Email: {s.height}</p>
                        <p>Salary: {s.salary}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Sp;