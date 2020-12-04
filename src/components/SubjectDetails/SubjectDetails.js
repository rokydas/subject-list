import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { subjectContext } from '../../App';
// import fakeSubjects from '../fakeSubjects/fakeSubjects';
import './SubjectDetails.css';

const SubjectDetails = () => {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subjects')
            .then(res => res.json())
            .then(data => {
                setSubjects(data);
            });
    }, [])

    const { id } = useParams();

    const test = () => {
        console.log(selectedSubject);
    }

    let selectedSubject = {};

    if (subjects.length > 0) {
        selectedSubject = subjects.find(sb => JSON.stringify(sb._id) === JSON.stringify(id));
    }

    const { classNo, subjectName, subjectCode, topic, type, img } = selectedSubject;

    return (
        <div style={{ width: '70%', margin: '0 auto' }} className="mt-5 pt-5">
            {subjects.length > 0 ?

                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="p-5">
                            {
                                <img height="150px" src={`data:image/png;base64,${img.img}`} alt="subject" />
                            }

                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="p-5 details">
                            {subjects.length > 0 &&
                                <div>
                                    <h3>Subject Name: {subjectName}</h3>
                                    <h4>Subject Code: {subjectCode}</h4>
                                    <h5>Topic: {topic}</h5>
                                    <h5>Type: {type}</h5>
                                    <h5>Class: {classNo}</h5>
                                </div>
                            }
                            <br />
                            <button className="custom-btn mr-5">Update</button>
                            <button onClick={test} className="custom-btn">Delete</button>
                        </div>
                    </div>
                </div>
                : <div className="text-center">
                    <img src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif" alt="Loading" />
                </div>

            }
        </div>
    );
};

export default SubjectDetails;