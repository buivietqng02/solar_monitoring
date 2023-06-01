import React from 'react'
import styled from 'styled-components';
import {FaAngleRight} from 'react-icons/fa';
import {IoIosExpand} from 'react-icons/io';
import styles from './Fleet.module.css';
const Wrapper= styled.div`
height: 40px;
border: 1px solid red;
display: flex;
justify-content: space-around;
align-items: center;
`;


const Title = () => {
  return (
    <Wrapper>
        <span>Site List<FaAngleRight/></span>
        <span>Sites:<span className={styles.number}>1</span></span>
        <span>Fleet Capacity:<span className={styles.number}>1.19</span>MWp</span>
        <span><span className={styles.number}>1.08</span>MWac</span>
        <span>Total Production<span className={styles.number}>3.92</span>GWh</span>
        <span><IoIosExpand/></span>

    </Wrapper>  
  )
}

export default Title