import React from 'react';
import '../assets/styles/DeviceList.scss';
import MainviewLayout from '../layouts/MainviewLayout';
import { Radio, Tabs } from 'antd';
import { useState } from 'react';
import SearchBox from '../components/SearchBox';
import MyTable from '../components/MyTable';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

export default function DeviceList() {
  const deviceList = [
    {
      label: 'Inverter',
      value: 'inverter',
    },
    {
      label: 'Energy Meter',
      value: 'meter',
    },
    {
      label: 'Weather Station',
      value: 'weather_station',
    },
  ];
  const [selectedDeviceKind, setSelectedDeviceKind] = useState('inverter');

  const handleSelectDeviceKind = (key) => {
    setSelectedDeviceKind(key);
  };
  //
  const [filterOptions, setFilterOptions] = useState([
    {
      id: '1',
      name: 'All',
      quantity: 5,
    },
    {
      id: '2',
      name: 'Night State',
      quantity: 5,
    },
    {
      id: '3',
      name: 'Info Not Available',
      quantity: 0,
    },
  ]);
  const [selectedFilter, setSelectedFilter] = useState('1');
  const handleChangeFilter = (e) => {
    setSelectedFilter(e.target.value);
  };
  const columnsTableInverter = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 250,
      fixed: 'left',
      render: (value, data) => (
        <Link
          style={{
            color: '#ffffff',
          }}
          to={`/site-monitor/devicelist/details/${data.key}`}
        >
          {value}
        </Link>
      ),
    },
    {
      title: 'Syst. Diag.',
      dataIndex: 'string_status',
      key: 'string_status',
      width: 250,
      fixed: 'left',
    },
    {
      title: 'State',
      dataIndex: 'status',
      key: 'status',
      width: 160,
    },
    {
      title: 'Meter-read Total Energy',
      dataIndex: 'energy',
      key: 'energy',
      width: 200,
    },
    {
      title: 'Active Power(kW)',
      dataIndex: 'active_power',
      key: 'active_power',
      width: 160,
    },
    {
      title: 'Input Power(kW)',
      dataIndex: 'input_power',
      key: 'input_power',
      width: 160,
    },
    {
      title: 'Efficiency',
      dataIndex: 'efficiency',
      key: 'efficiency',
      width: 160,
    },
    {
      title: 'Production Today(kwh)',
      dataIndex: 'production',
      key: 'production',
      width: 200,
    },
    {
      title: 'Yield Today(kwh)',
      dataIndex: 'yield',
      key: 'yield',
      width: 160,
    },
  ];
  const [dataSourceTableInv, setDataSourceTableInv] = useState([
    {
      key: '1',
      name: 'FULUH_Canteen 1_Inverter 1',
      string_status: 'String normal',
      status: 'Night state',
      energy: 361600.34,
      active_power: 0,
      input_power: 0,
      efficiency: '80%',
      yield: 3.1,
      production: 341.49,
    },
    {
      key: '2',
      name: 'FULUH_Canteen 1_Inverter 1',
      string_status: 'String normal',
      status: 'Night state',
      energy: 361600.34,
      active_power: 0,
      input_power: 0,
      efficiency: '80%',
      yield: 3.1,
      production: 341.49,
    },
    {
      key: '3',
      name: 'FULUH_Canteen 1_Inverter 1',
      string_status: 'String normal',
      status: 'Night state',
      energy: 361600.34,
      active_power: 0,
      input_power: 0,
      efficiency: '80%',
      yield: 3.1,
      production: 341.49,
    },
    {
      key: '4',
      name: 'FULUH_Canteen 1_Inverter 1',
      string_status: 'String normal',
      status: 'Night state',
      energy: 361600.34,
      active_power: 0,
      input_power: 0,
      efficiency: '80%',
      yield: 3.1,
      production: 341.49,
    },
    {
      key: '5',
      name: 'FULUH_Canteen 1_Inverter 1',
      string_status: 'String normal',
      status: 'Night state',
      energy: 361600.34,
      active_power: 0,
      input_power: 0,
      efficiency: '80%',
      yield: 3.1,
      production: 341.49,
    },
    {
      key: '6',
      name: 'FULUH_Canteen 1_Inverter 1',
      string_status: 'String normal',
      status: 'Night state',
      energy: 361600.34,
      active_power: 0,
      input_power: 0,
      efficiency: '80%',
      yield: 3.1,
      production: 341.49,
    },
    {
      key: '7',
      name: 'FULUH_Canteen 1_Inverter 1',
      string_status: 'String normal',
      status: 'Night state',
      energy: 361600.34,
      active_power: 0,
      input_power: 0,
      efficiency: '80%',
      yield: 3.1,
      production: 341.49,
    },
    {
      key: '8',
      name: 'FULUH_Canteen 1_Inverter 1',
      string_status: 'String normal',
      status: 'Night state',
      energy: 361600.34,
      active_power: 0,
      input_power: 0,
      efficiency: '80%',
      yield: 3.1,
      production: 341.49,
    },
  ]);
  return (
    <MainviewLayout>
      <div className='devicelist'>
        <div className='devicelist-header'></div>
        <div className='devicelist-body'>
          <div className='select-device-section'>
            <Tabs
              activeKey={selectedDeviceKind}
              onChange={handleSelectDeviceKind}
            >
              {deviceList.map((item) => {
                return <TabPane tab={item.label} key={item.value}></TabPane>;
              })}
            </Tabs>
          </div>
          <div className='filter-section'>
            <Radio.Group value={selectedFilter} onChange={handleChangeFilter}>
              {filterOptions.map((item, index) => {
                return (
                  <Radio.Button value={item.id} key={index}>
                    {item.name} {item.quantity}
                  </Radio.Button>
                );
              })}
            </Radio.Group>
          </div>
          <div className='search-setting-section'>
            <SearchBox placeholder='Search by name' />
            <div className='btn-group'>
              <button className='btn-export'>Export</button>
            </div>
          </div>
          <div className='table-section'>
            <MyTable
              dataSource={dataSourceTableInv}
              columns={columnsTableInverter}
              pagination={false}
              scroll={{
                x: 1000,
                y: 300,
              }}
            />
          </div>
        </div>
      </div>
    </MainviewLayout>
  );
}
