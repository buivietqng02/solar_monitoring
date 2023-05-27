import React from 'react';
import { DatePicker } from 'antd';
import '../assets/styles/DateSelect.scss';
export default function DateSelect(props) {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className='date-select'>
      <DatePicker
        onChange={onChange}
        picker={props.picker}
        allowClear={false}
      />
    </div>
  );
}
