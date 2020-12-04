import React, { useContext, useEffect, useState } from 'react';
import { subjectContext } from '../../App';
import fakeSubjects from '../fakeSubjects/fakeSubjects';
import SingleSubject from '../SingleSubject/SingleSubject';
import './AllSubjects.css';

const AllSubjects = () => {

    const [subjects, setSubjects] = useContext(subjectContext);

    useEffect(() => {
        fetch('http://localhost:5000/subjects')
            .then(res => res.json())
            .then(data => {
                setSubjects(data);
                console.log(subjects);
            });
    }, [])

    return (
        <div className="custom-container">
            {subjects.length > 0 ?
                <div className="row">
                {
                    subjects.map(sb => <SingleSubject key={sb._id} subject={sb} />)
                }
            </div>
                : <div className="text-center">
                    <img src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif" alt="Loading" />
                </div>    
        }
        </div>
    );
};

export default AllSubjects;