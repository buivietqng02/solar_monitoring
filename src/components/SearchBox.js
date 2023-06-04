import React from 'react';
import '../assets/styles/SearchBox.scss';
import { BiSearch } from 'react-icons/bi';

export default function SearchBox(props) {
  const { value, onChange, placeholder } = props;
  return (
    <div className='search-box'>
      <input
        value={value}
        placeholder={placeholder}
        className='search-input'
        onChange={onChange}
      />
      <BiSearch className='search-icon' />
    </div>
  );
}
