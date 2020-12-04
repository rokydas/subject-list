import React from 'react';
import { useParams } from 'react-router-dom';
import fakeSubjects from '../fakeSubjects/fakeSubjects';

const SubjectDetails = () => {

    const { id } = useParams();

    const selectedSubject = fakeSubjects.find(sb => sb.id === Number(id));

    return (
        <div>
            {selectedSubject.subjectName}
        </div>
    );
};

export default SubjectDetails;