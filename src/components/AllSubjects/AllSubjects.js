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
            <div className="row">
                {
                    subjects.map(sb => <SingleSubject key={sb._id} subject={sb} />)
                }
            </div>
        </div>
    );
};

export default AllSubjects;