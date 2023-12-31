import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../assets/styles/Topbar.scss';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import ProfileButton from './ProfileButton';
export default function Topbar(props) {
  return (
    <Navbar className='topbar' sticky='top'>
      <Container fluid>
        <Navbar.Brand>
          <button
            className='btn btn-white me-4'
            onClick={() => {
              props.handleToggleSidebar();
            }}
          >
            <FaBars className='text-white fs-5' />
          </button>
          <img src={logo} alt='' className='logo' />
        </Navbar.Brand>
        <ProfileButton />
      </Container>
    </Navbar>
  );
}
