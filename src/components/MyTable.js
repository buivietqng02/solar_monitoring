import React from 'react';
import '../assets/styles/MyTable.scss';
import { Table } from 'antd';

export default function MyTable({ dataSource, columns, ...restProps }) {
  return (
    <Table
      className='my-table'
      dataSource={dataSource}
      columns={columns}
      {...restProps}
    />
  );
}
