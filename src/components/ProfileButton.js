import React from 'react';
import '../assets/styles/ProfileButton.scss';
import { Dropdown, Menu } from 'antd';
import { IoMdArrowDropdown, IoMdLogOut } from 'react-icons/io';
import { AiFillLock } from 'react-icons/ai';

export default function ProfileButton() {
  const menuWeb = (
    <Menu className='menu-dropdown'>
      <div className='user-info'>
        <div className='user-name'>Thai hoa</div>
        <div className='email'>thaihoa@yopmail.com</div>
      </div>
      <Menu.Item className='menu-dropdown-item'>
        <AiFillLock className='icon' />
        <span>Change Password</span>
      </Menu.Item>
      <Menu.Item className='menu-dropdown-item'>
        <IoMdLogOut className='icon' />
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='profile-button' id='container-dropdown'>
      <Dropdown
        overlay={menuWeb}
        placement='bottomRight'
        forceRender
        trigger={['click']}
        getPopupContainer={() => document.getElementById('container-dropdown')}
      >
        <button className='btn-dropdown'>
          Thai hoa <IoMdArrowDropdown size={20} />
        </button>
      </Dropdown>
    </div>
  );
}
