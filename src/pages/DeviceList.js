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
  //For inverter table
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
  //For meter table
  const columnsTableMeter = [
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
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 160,
    },
    {
      title: 'Attribute',
      dataIndex: 'attribute',
      key: 'attribute',
      width: 160,
    },
    {
      title: 'State',
      dataIndex: 'status',
      key: 'status',
      width: 160,
    },
    {
      title: 'Active Generated',
      dataIndex: 'active_generated',
      key: 'active_generated',
      width: 200,
    },
    {
      title: 'Active Consumed',
      dataIndex: 'active_consumed',
      key: 'active_consumed',
      width: 200,
    },
    {
      title: 'Reactive Consumed',
      dataIndex: 'reactive_consumed',
      key: 'reactive_consumed',
      width: 200,
    },
    {
      title: 'Reactive Consumed',
      dataIndex: 'reactive_consumed',
      key: 'reactive_consumed',
      width: 200,
    },
  ];
  const [dataSourceTableMeter, setDataSourceTableMeter] = useState([
    {
      key: '1',
      name: 'Fuluh_Canteen 1_EMT',
      type: 'Energy Meter',
      attribute: 'Main Meter',
      status: 'Night State',
      active_generated: 1808594.75,
      active_consumed: 425.24,
      reactive_generated: 31950.76,
      reactive_consumed: 32462.35,
    },
    {
      key: '2',
      name: 'Fuluh_Canteen 1_EMT',
      type: 'Energy Meter',
      attribute: 'Main Meter',
      status: 'Night State',
      active_generated: 1808594.75,
      active_consumed: 425.24,
      reactive_generated: 31950.76,
      reactive_consumed: 32462.35,
    },
    {
      key: '3',
      name: 'Fuluh_Canteen 1_EMT',
      type: 'Energy Meter',
      attribute: 'Main Meter',
      status: 'Night State',
      active_generated: 1808594.75,
      active_consumed: 425.24,
      reactive_generated: 31950.76,
      reactive_consumed: 32462.35,
    },
    {
      key: '4',
      name: 'Fuluh_Canteen 1_EMT',
      type: 'Energy Meter',
      attribute: 'Main Meter',
      status: 'Night State',
      active_generated: 1808594.75,
      active_consumed: 425.24,
      reactive_generated: 31950.76,
      reactive_consumed: 32462.35,
    },
  ]);
  //For weather station table
  const columnsTableWS = [
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
      title: 'State',
      dataIndex: 'status',
      key: 'status',
      width: 160,
    },
    {
      title: 'POA (W/㎡)',
      dataIndex: 'poa',
      key: 'poa',
      width: 160,
    },
    {
      title: 'POA2 (W/㎡)',
      dataIndex: 'poa2',
      key: 'poa2',
      width: 160,
    },

    {
      title: 'GHI (W/㎡)',
      dataIndex: 'ghi',
      key: 'ghi',
      width: 160,
    },
    {
      title: 'Ambient Temp. (℃)',
      dataIndex: 'ambient_temp',
      key: 'ambient_temp',
      width: 200,
    },
    {
      title: 'Module Temp. 1 (℃)',
      dataIndex: 'module_temp_1',
      key: 'module_temp_1',
      width: 200,
    },
    {
      title: 'Humidity (%)',
      dataIndex: 'humidity',
      key: 'humidity',
      width: 160,
    },
  ];
  const [dataSourceTableWS, setDataSourceTableWS] = useState([
    {
      key: '1',
      name: 'VN_Fuluh_VNS800',
      status: 'Night State',
      poa: 987,
      poa2: '--',
      ghi: 567,
      ambient_temp: 25.1,
      module_temp_1: 26,
      humidity: 88,
    },
    {
      key: '2',
      name: 'VN_Fuluh_VNS800',
      status: 'Night State',
      poa: 987,
      poa2: '--',
      ghi: 567,
      ambient_temp: 25.1,
      module_temp_1: 26,
      humidity: 88,
    },
    {
      key: '3',
      name: 'VN_Fuluh_VNS800',
      status: 'Night State',
      poa: 987,
      poa2: '--',
      ghi: 567,
      ambient_temp: 25.1,
      module_temp_1: 26,
      humidity: 88,
    },
    {
      key: '4',
      name: 'VN_Fuluh_VNS800',
      status: 'Night State',
      poa: 987,
      poa2: '--',
      ghi: 567,
      ambient_temp: 25.1,
      module_temp_1: 26,
      humidity: 88,
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
            {selectedDeviceKind === 'inverter' && (
              <MyTable
                dataSource={dataSourceTableInv}
                columns={columnsTableInverter}
                pagination={false}
                scroll={{
                  x: 1000,
                  y: 300,
                }}
              />
            )}
            {selectedDeviceKind === 'meter' && (
              <MyTable
                dataSource={dataSourceTableMeter}
                columns={columnsTableMeter}
                pagination={false}
                scroll={{
                  x: 1000,
                  y: 300,
                }}
              />
            )}
            {selectedDeviceKind === 'weather_station' && (
              <MyTable
                dataSource={dataSourceTableWS}
                columns={columnsTableWS}
                pagination={false}
                scroll={{
                  x: 1000,
                  y: 300,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </MainviewLayout>
  );
}
