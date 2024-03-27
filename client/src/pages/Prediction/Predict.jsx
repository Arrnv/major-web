import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav'
import "./Predict.css"
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import { Container } from '@mui/material';
import axios from 'axios';

const Predict = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: null,
    gender: null,
    bloodPressure: '',
    bmi: '',
    cholesterolLevel: '',
    previousConditions: '',
    smoking: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/', formData);
      console.log('Response:', response.data);
      // Handle success response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle error as needed
    }
  };

  return (
    <div className='back'>
      <Nav />
      <Container fixed>
        <div className="test">
          <div className="logo">LOGO</div>
          <br />
          <div className="container">
            <div className="input">
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <br />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <div>
                  <label>Date of birth</label>
                  <div className="dateofbirth">
                    <DatePicker className='datebox' dateFormat="dd" renderCustomHeader={({ date }) => <div></div>} selected={formData.dateOfBirth} onChange={(date) => setFormData({ ...formData, dateOfBirth: date })} placeholderText='dd' />
                    <DatePicker className='datebox' showMonthYearPicker dateFormat="MMMM" renderCustomHeader={({ date }) => <div></div>} selected={formData.dateOfBirth} onChange={(date) => setFormData({ ...formData, dateOfBirth: date })} placeholderText='mm' />
                    <DatePicker className='datebox' selected={formData.dateOfBirth} onChange={(date) => setFormData({ ...formData, dateOfBirth: date })} showYearPicker dateFormat="yyyy" placeholderText='yyyy' />
                  </div>
                </div>

                <div>
                  <label>Sex</label>
                  <div className="sex">
                    <label className="container1">
                      <input type="radio" name='gender' value="male" checked={formData.gender === 'male'} onChange={() => handleGenderChange('male')} />
                      <span className="checkmark"></span>
                    </label>
                    <p>male</p>
                    <label className="container1">
                      <input type="radio" name='gender' value="female" checked={formData.gender === 'female'} onChange={() => handleGenderChange('female')} />
                      <span className="checkmark"></span>
                    </label>
                    <p>female</p>
                  </div>
                </div>

                <div className="bpandBMI">
                  <div>
                    <label>Blood Pressure</label>
                    <input type="number" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} placeholder='mmHg' />
                  </div>
                  <div>
                    <label>BMI</label>
                    <input type="number" name="bmi" value={formData.bmi} onChange={handleChange} placeholder='kg/m2' />
                  </div>
                </div>
                <div>
                  <label>Cholesterol Level</label>
                  <input type="number" name="cholesterolLevel" value={formData.cholesterolLevel} onChange={handleChange} placeholder='mg/dL' />
                </div>
                <div>
                  <label>Previous Heart Conditions</label>
                  <input type="text" name="previousConditions" value={formData.previousConditions} onChange={handleChange} placeholder='other' />
                </div>
                <div>
                  <p>Smoking status</p>
                  <div className='checklock'>
                    <p>Yes</p>
                    <label className="switch">
                      <input type="checkbox" name="smoking" checked={formData.smoking} onChange={() => setFormData({ ...formData, smoking: !formData.smoking })} />
                      <span className="slider round"></span>
                    </label>
                    <p>No</p>
                  </div>
                </div>
                <button className='submitBTN' type="submit">Predict</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Predict;
