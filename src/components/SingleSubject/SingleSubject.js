import React from 'react';
import './SingleSubject.css';

const SingleSubject = ({ subject }) => {

    const { id, classNo, subjectName, subjectCode, topic, type, img } = subject;

    return (
        <div className="col-md-4  p-3 text-center">
            <div className="single-subject p-5">
                <img width="300px" src={img} alt="subject" /><br/><br/>
                <h3>Subject Name: {subjectName}</h3>
                <h4>Subject Code: {subjectCode}</h4>
                <h5>Topic: {topic}</h5>
                <h5>Type: {type}</h5>
                <h5>Class: {classNo}</h5>
                <a href={`/details/${id}`}><button className="custom-btn">See Details</button></a>
            </div>
        </div>
    );
};

export default SingleSubject;