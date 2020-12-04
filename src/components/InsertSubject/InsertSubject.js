import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const InsertSubject = () => {

    // class , subject, code, topic, type, img

    const classes = useStyles();
    const [classNo, setClassNo] = useState(6);
    const [subjectName, setSubjectName] = useState('English');
    const [subjectCode, setSubjectCode] = useState('eng');
    const [type, setType] = useState(1);
    const [topic, setTopic] = useState('');
    // const [img, setImg] = useState('');

    const handleBlur = (e) => {
        setTopic(e.target.value);
    }

    const handleClassChange = (event) => {
        setClassNo(event.target.value);
        console.log(classNo);
    };

    const handleSubjectNameChange = (event) => {
        setSubjectName(event.target.value);
        console.log(subjectName);
    };

    const handleSubjectCodeChange = (event) => {
        setSubjectCode(event.target.value);
        console.log(subjectCode);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
        console.log(type);
    };

    return (
        <div style={{ width: '60%', margin: '0 auto' }}>
            <div className="text-center mt-5 mb-5">
                <h1>You are an Admin or an Employee</h1>
                <h3>Insert new subject data</h3>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" placeholder="Enter Topic" required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input className="form-control" type="file" required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Class</InputLabel>
                            <Select
                                native
                                value={classNo}
                                onChange={handleClassChange}
                            >
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-3">
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Subject Name</InputLabel>
                            <Select
                                native
                                value={subjectName}
                                onChange={handleSubjectNameChange}
                            >
                                <option value={'English'}>English</option>
                                <option value={'Math'}>Math</option>
                                <option value={'Physics'}>Physics</option>
                                <option value={'Chemistry'}>Chemistry</option>
                                <option value={'Biology'}>Biology</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-3">
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Subject Code</InputLabel>
                            <Select
                                native
                                value={subjectCode}
                                onChange={handleSubjectCodeChange}
                            >
                                <option value={'eng'}>eng</option>
                                <option value={'math'}>math</option>
                                <option value={'phy'}>phy</option>
                                <option value={'che'}>che</option>
                                <option value={'bio'}>bio</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-3">
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                            <Select
                                native
                                value={type}
                                onChange={handleTypeChange}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="custom-btn mt-5">Insert Subject</button>
                </div>
            </form>
        </div>
    );
};

export default InsertSubject;

