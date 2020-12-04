import React from 'react';
import fakeSubjects from '../fakeSubjects/fakeSubjects';
import SingleSubject from '../SingleSubject/SingleSubject';
import './AllSubjects.css';

const AllSubjects = () => {

    return (
        <div className="custom-container">
            <div className="row">
                {
                    fakeSubjects.map(sb => <SingleSubject key={sb.id} subject={sb} />)
                }
            </div>
        </div>
    );
};

export default AllSubjects;