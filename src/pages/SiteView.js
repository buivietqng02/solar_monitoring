import React from 'react';
import '../assets/styles/SiteView.scss';
import MainviewLayout from '../layouts/MainviewLayout';
import { IoHomeOutline, IoLocationOutline } from 'react-icons/io5';
import { useState } from 'react';
import TimeStampSelect from '../components/TimeStampSelect';
import DateSelect from '../components/DateSelect';
import ReactApexChart from 'react-apexcharts';
import MyTable from '../components/MyTable';
import InverterIcon from '../assets/icons/inverter.png';
import MeterIcon from '../assets/icons/meter.png';
import GridIcon from '../assets/icons/grid.png';

export default function SiteView() {
  const [timeStamp, setTimeStamp] = useState('date');
  const [data1, setData1] = useState({
    production: [0, 0, 0, 0, 8.63, 113.91, 297, 559],
    irradiation: [0, 0, 0, 0, 12.36, 125.35, 294, 550],
    label: [
      '00:00',
      '01:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
    ],
  });
  const series1 = [
    {
      name: 'Production',
      type: 'column',
      data: data1.production,
    },
    {
      name: 'Irradiation',
      type: 'line',
      data: data1.irradiation,
    },
  ];
  const options1 = {
    chart: {
      //height: 350,
      type: 'line',
      animations: {
        enabled: false,
      },
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
      },
    },
    colors: ['#00f9fc', '#d0ff00'],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    title: {
      //text: 'Traffic Sources',
    },
    legend: {
      show: true,
      labels: {
        colors: '#f1f1f1',
      },
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: false,
    },
    labels: data1.label,
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#90A4AE',
        },
        //rotate: 0,
      },
      axisBorder: {
        show: true,
        color: '#78909C',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
      tickAmount: 10,
    },
    yaxis: [
      {
        showAlways: true,
        title: {
          text: 'kWh',
          offsetX: 20,
          offsetY: -100,
          rotate: 0,
          style: {
            color: '#90A4AE',
            fontWeight: 500,
            fontSize: 13,
          },
        },
        labels: {
          style: {
            colors: '#90A4AE',
          },
        },
      },
      {
        opposite: true,
        showAlways: true,
        title: {
          text: 'Wh/㎡',
          offsetX: -20,
          offsetY: -100,
          rotate: 0,
          style: {
            color: '#90A4AE',
            fontWeight: 500,
            fontSize: 13,
          },
        },
        labels: {
          style: {
            colors: '#90A4AE',
          },
        },
      },
    ],
  };
  const [data2, setData2] = useState({
    activePower: [0, 0, 0, 0, 8.63, 113.91, 297, 559],
    GHI: [0, 0, 0, 0, 12.36, 125.35, 294, 550],
    label: [
      '00:00',
      '01:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
    ],
  });
  const series2 = [
    {
      name: 'Active Power',
      type: 'line',
      data: data2.activePower,
    },
    {
      name: 'Irradiance',
      type: 'line',
      data: data2.GHI,
    },
  ];
  const options2 = {
    chart: {
      //height: 350,
      type: 'line',
      animations: {
        enabled: false,
      },
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    colors: ['#00f9fc', '#d0ff00'],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    title: {
      //text: 'Traffic Sources',
    },
    legend: {
      show: true,
      labels: {
        colors: '#f1f1f1',
      },
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: false,
    },
    labels: data2.label,
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#90A4AE',
        },
        //rotate: 0,
      },
      axisBorder: {
        show: true,
        color: '#78909C',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
      tickAmount: 10,
    },
    yaxis: [
      {
        showAlways: true,
        title: {
          text: 'kW',
          offsetX: 20,
          offsetY: -100,
          rotate: 0,
          style: {
            color: '#90A4AE',
            fontWeight: 500,
            fontSize: 13,
          },
        },
        labels: {
          style: {
            colors: '#90A4AE',
          },
        },
      },
      {
        opposite: true,
        showAlways: true,
        title: {
          text: 'W/㎡',
          offsetX: -20,
          offsetY: -100,
          rotate: 0,
          style: {
            color: '#90A4AE',
            fontWeight: 500,
            fontSize: 13,
          },
        },
        labels: {
          style: {
            colors: '#90A4AE',
          },
        },
      },
    ],
  };
  const columnsTableInverter = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 250,
    },
    {
      title: 'Yield',
      dataIndex: 'yield',
      key: 'yield',
    },
    {
      title: 'Production(kWh)',
      dataIndex: 'production',
      key: 'production',
      width: 160,
    },
    {
      title: 'Power Ratio(%)',
      dataIndex: 'power_ratio',
      key: 'power_ratio',
    },
  ];
  const [dataSourceTableInv, setDataSourceTableInv] = useState([
    {
      key: '1',
      name: 'FULUH_Canteen 1_Inverter 1',
      yield: 3.1,
      production: 341.49,
      power_ratio: 0,
    },
    {
      key: '2',
      name: 'FULUH_Canteen 1_Inverter 1',
      yield: 3.1,
      production: 341.49,
      power_ratio: 0,
    },
    {
      key: '3',
      name: 'FULUH_Canteen 1_Inverter 1',
      yield: 3.1,
      production: 341.49,
      power_ratio: 0,
    },
    {
      key: '4',
      name: 'FULUH_Canteen 1_Inverter 1',
      yield: 3.1,
      production: 341.49,
      power_ratio: 0,
    },
    {
      key: '5',
      name: 'FULUH_Canteen 1_Inverter 1',
      yield: 3.1,
      production: 341.49,
      power_ratio: 0,
    },
    {
      key: '6',
      name: 'FULUH_Canteen 1_Inverter 1',
      yield: 3.1,
      production: 341.49,
      power_ratio: 0,
    },
    {
      key: '7',
      name: 'FULUH_Canteen 1_Inverter 1',
      yield: 3.1,
      production: 341.49,
      power_ratio: 0,
    },
    {
      key: '8',
      name: 'FULUH_Canteen 1_Inverter 1',
      yield: 3.1,
      production: 341.49,
      power_ratio: 0,
    },
  ]);
  return (
    <MainviewLayout>
      <div className='siteview'>
        <div className='siteview-header'></div>
        <div className='siteview-body'>
          <div className='statistics-pannel'>
            <div className='column-1'>
              <div className='icon-badge'>
                <IoHomeOutline className='icon' />
              </div>
              <div className='status'>
                <div className='label'>Operation State</div>
                <div className='value'>Normal</div>
              </div>
            </div>
            <div className='column-2'>
              <div className='inverter-info'>
                <div className='content'>
                  <div className='title'>
                    Inverter (12) <a href='#'>details</a>
                  </div>
                  <div className='info'>
                    <div>
                      <div className='label'>Info Not Available</div>
                      <div className='value'>0</div>
                    </div>
                    <div>
                      <div className='label'>Partial Capability</div>
                      <div className='value'>0</div>
                    </div>
                    <div>
                      <div className='label'>Non-Operative</div>
                      <div className='value'>0</div>
                    </div>
                  </div>
                </div>
                <i className='division' />
              </div>
              <div className='string-info'>
                <div className='content'>
                  <div className='title'>
                    String (161) <a href='#'>details</a>
                  </div>
                  <div className='info'>
                    <div>
                      <div className='label'>Cut-out</div>
                      <div className='value'>0</div>
                    </div>
                  </div>
                </div>
                <i className='division' />
              </div>
              <div className='alarm-info'>
                <div className='content'>
                  <div className='title'>
                    Alarm (8) <a href='#'>details</a>
                  </div>
                  <div className='info'>
                    <div>
                      <div className='label'>Fault</div>
                      <div className='value'>0</div>
                    </div>
                    <div>
                      <div className='label'>Warning</div>
                      <div className='value'>8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='time-address-section'>
            <div className='time-control'>
              <div
                style={{
                  marginRight: '10px',
                }}
              >
                <TimeStampSelect
                  timeStamp={timeStamp}
                  setTimeStamp={setTimeStamp}
                />
              </div>
              <DateSelect picker={timeStamp} />
            </div>
            <div className='address'>
              <IoLocationOutline className='icon' /> Fu-Luh Shoes Co., Ltd, Tri
              Yen, Tan Kim, Can Giuoc, Long An, Vietnam
            </div>
          </div>
          <div className='chart-section'>
            <div className='chart-section-header'>
              <div className='item-info'>
                <span className='label'>Capacity</span>{' '}
                <span className='value'>1.19 MWp</span>
              </div>
              <div className='item-info'>
                <span className='label'>Irradiation</span>{' '}
                <span className='value'>2.02 kWh/㎡</span>
              </div>
              <div className='item-info'>
                <span className='label'>Yield</span>{' '}
                <span className='value'>1.7 h</span>
              </div>
              <div className='item-info'>
                <span className='label'>Production</span>{' '}
                <span className='value'>2.01 MWh</span>
              </div>
              <div className='item-info'>
                <span className='label'>Power Ratio</span>{' '}
                <span className='value'>68.5 %</span>
              </div>
            </div>
            <div className='chart-section-body'>
              <div>
                <ReactApexChart
                  options={options1}
                  series={series1}
                  type='line'
                  height={250}
                />
              </div>
              <div>
                <ReactApexChart
                  options={options2}
                  series={series2}
                  type='line'
                  height={250}
                />
              </div>
            </div>
          </div>
          <div className='inverter-production-section'>
            <div className='inverter-ranking'>
              <div className='title'>Inverter ranking</div>
              <div className='content'>
                <MyTable
                  dataSource={dataSourceTableInv}
                  columns={columnsTableInverter}
                  pagination={false}
                  scroll={{
                    x: 700,
                    y: 300,
                  }}
                />
              </div>
            </div>
            <div className='production-info'>
              <div className='title'>Production</div>
              <div className='content'>
                <div className='d-flex align-items-start'>
                  <div className='item'>
                    <img src={InverterIcon} className='icon' />
                    <div className='label'>Inverter</div>
                    <div className='value'>3.71 Mwh</div>
                  </div>
                  <div className='arrow-line'></div>
                  <div className='item'>
                    <img src={MeterIcon} className='icon' />
                    <div className='label'>Energy Meter</div>
                    <div className='value'>3.69 Mwh</div>
                  </div>
                  <div className='arrow-line'></div>
                  <div className='item'>
                    <img src={GridIcon} className='icon' />
                    <div className='label'>Grid</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainviewLayout>
  );
}
