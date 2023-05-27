import React from 'react';
import { Radio } from 'antd';
import '../assets/styles/TimeStampSelect.scss';
export default function TimeStampSelect(props) {
  return (
    <Radio.Group
      value={props.timeStamp}
      onChange={(e) => props.setTimeStamp(e.target.value)}
      className='timestamp-select'
    >
      <Radio.Button value='date'>Daily</Radio.Button>
      <Radio.Button value='month'>Monthly</Radio.Button>
      <Radio.Button value='year'>Yearly</Radio.Button>
    </Radio.Group>
  );
}
