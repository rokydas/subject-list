import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { subjectContext } from '../../App';
// import fakeSubjects from '../fakeSubjects/fakeSubjects';
import './SubjectDetails.css';

const SubjectDetails = () => {

    const { id } = useParams();

    const test = () => {
        console.log(subjects);
    }

    const [subjects, setSubjects] = useContext(subjectContext);

    // const selectedSubject = subjects.find(sb => sb._id === id);

    const selectedSubject = subjects[0];
    
    const { classNo, subjectName, subjectCode, topic, type, img } = selectedSubject;

    return (
        <div style={{ width: '70%', margin: '0 auto' }} className="mt-5 pt-5">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="p-5">
                        {
                            // img ?? <img width="500px" src={`data:image/png;base64,${img}`} alt="subject" />
                        }
                        
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="p-5 details">
                        <h3>Subject Name: {subjectName}</h3>
                        <h4>Subject Code: {subjectCode}</h4>
                        <h5>Topic: {topic}</h5>
                        <h5>Type: {type}</h5>
                        <h5>Class: {classNo}</h5><br />
                        <button className="custom-btn mr-5">Update</button>
                        <button onClick={test} className="custom-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectDetails;