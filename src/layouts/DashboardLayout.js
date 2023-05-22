import React, { useState } from 'react';
import '../assets/styles/DashboardLayout.scss';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Outlet } from 'react-router-dom';
export default function DashboardLayout({ children }) {
  const [toggled, setToggled] = useState(true);
  const handleToggleSidebar = (value) => {
    setToggled(!toggled);
    setCollapsed(!collapsed);
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className='dashboard-layout'>
      <Topbar handleToggleSidebar={handleToggleSidebar} />
      <div className='mainview'>
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        />
        <div className='children'>
          <Outlet />
        </div>
      </div>
      {/*<div
      style={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <div className='w-100'>
        <Topbar handleToggleSidebar={handleToggleSidebar} />
        <div style={{ height: 'calc(100vh - 70px)', overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>*/}
    </div>
  );
}
