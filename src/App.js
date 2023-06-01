import 'antd/dist/antd.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import SignIn from './pages/SignIn';
import DashboardLayout from './layouts/DashboardLayout';
import SiteView from './pages/SiteView';
import FleetView from './components/FleetView/FleetView';

function App() {
  const windowHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--window-height', `${window.innerHeight}px`);
  };
  window.addEventListener('resize', windowHeight);
  windowHeight();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/sign-in' />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route element={<DashboardLayout />}>
          <Route path='/site-monitor/siteview' element={<SiteView />} />
          <Route path='/central-monitor/fleetview' element={<FleetView />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
