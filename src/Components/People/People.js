import React from 'react';
import './People.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const People = (props) => {
    const {id,first_name,last_name,height,img,age,gender,salary}=props.staff;
    return (
        <div className='people-details'>
            <img className='photo' src={img} alt=""/>
            <h3>Full Name: {first_name+' '+last_name}</h3>
            <p>Email: {height}</p>
            <p>Gender: {gender}</p>
            <h5>Salary: ${salary}</h5>
            <p>Age: {age}</p>
            <button onClick={()=>props.handleButton(props.staff)} className='btn btn-success'><FontAwesomeIcon icon={faUserFriends} /> Select For Special Match</button>
        </div>
    );
};

export default People;