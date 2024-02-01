import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import "./Report.css";
import { Container } from '@mui/material';

const Report = () => {
  const [myMonth, setMyMonth] = useState(null);
  const [myYear, setMyYear] = useState(null);
  const [myDay, setMyDay] = useState(null);

  useEffect(() => {
    if (myMonth && myYear) {
      setMyDay(new Date(myYear.getFullYear(), myMonth.getMonth(), 1));
    }
  }, [myMonth, myYear, setMyDay]);

  const renderDayContents = (day, date) => {
    if (myMonth && myYear && (date < minDate || date > maxDate)) {
      return <span></span>;
    }
    return <span>{date.getDate()}</span>;
  };

  const minDate = myMonth && myYear ? new Date(myYear.getFullYear(), myMonth.getMonth(), 1) : null;
  const maxDate = myMonth && myYear ? new Date(myYear.getFullYear(), myMonth.getMonth() + 1, 0) : null;

  return (
    <Container fixed>
      <div className="test">
        <div className="logo">LOGO</div>
        <div className="container">
          <div className="input">
            <form>
              <label>
                Name:
                <br/>
                <input type="text" name="name" />
              </label>
              <div className="dateofbirth">
                <DatePicker
                  className='datebox'
                  selected={myYear}
                  onChange={(date) => setMyYear(date)}
                  showYearPicker
                  dateFormat="yyyy"
                />
                <DatePicker
                  className='datebox'
                  showMonthYearPicker
                  dateFormat="MMMM"
                  renderCustomHeader={({ date }) => <div></div>}
                  selected={myMonth}
                  onChange={(date) => setMyMonth(date)}
                />
                <DatePicker
                  className='datebox'
                  dateFormat="dd"
                  renderCustomHeader={({ date }) => <div></div>}
                  selected={myDay}
                  renderDayContents={renderDayContents}
                  onChange={(date) => setMyDay(date)}
                />
              </div>
              <label>Year</label>
              
              <label>Sex</label>
              <input type="checkbox" /><p>male</p>
              <input type="checkbox" /><p>female</p>
              <label >Blood Pressure</label>
              <input type="number" />
              <label >BMI</label>
              <input type="number" />
              <label >Cholesterol Level</label>
              <input type="number" />
              <p>Smoking status</p>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Report;
