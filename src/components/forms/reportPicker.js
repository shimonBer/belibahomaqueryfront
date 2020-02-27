import React from 'react';
import {Formik, Form, Field} from 'formik';
import {reportMaker} from '../../services/reportServices';


export default (props) => {
    const months = { Jan:'01', Feb:'02', Mar:'03', Apr:'04', May:'05', Jun:'06', Jul:'07', Aug:'08', Sep:'09', Oct:'10', Nov:'11', Dec:'12' };
    const years = ['2019', '2020'];

    const handleSubmit = async(values) => {
        try {
            const response = await reportMaker(values);
            if (200 <= response.status <= 300) {
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(response.data));
                element.setAttribute('download', values.reportName + '.csv');
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }
        }
        catch(err){
            console.log(err);
        }

    }
    return (
        <Formik initialValues={{ year:'2020', month: '01', reportName: 'queryTutorsHours'}} 
                onSubmit={handleSubmit}>
                    <Form>
                        <div>
                            <label>Pick a report</label>
                            <Field as="select" name="reportName">
                                <option key='1' value="queryTutorsHours">Tutors Hours</option>
                                <option key='2' value="queryKivunA">Kivun part 1</option>
                                <option key='3' value="queryKivunB">Kivun part 2</option>
                                <option key='4' value="queryKivunC">Kivun part 3</option>
                            </Field>
                        </div>
                        <div>
                            <label>Pick A Month</label>
                            <Field as="select" name="month">'
                                {
                                    Object.keys(months).map((month) => {
                                        return <option key={month} value={months[month]}>{month}</option>;                                    })
                                }

                            </Field>
                            
                        </div>
                        <div>
                            <label>Pick A Year</label>
                            <Field as="select" name="year">'
                                {
                                    years.map((year) => {
                                        return <option key={year} value={year}>{year}</option>;                                    
                                    })
                                }

                            </Field>
                            
                        </div>
                        <div>
                            <button type='submit'>Make Report</button>
                        </div>
                    </Form>
        </Formik>
        
    );

}

