import styled from "styled-components";
import Yogagirl from './yoga.jpg'


export const Card2Contain = styled.div`
    width: 500px;
    height: 550px;
`

export const Yoga = styled.div`
    width: 100%;
    height: 50%;
    background-image: url(${Yogagirl});
    background-position: center;
    background-size: cover;
`

export const Wellness = styled.p`
     color: #16195E;
     font-weight: bold;
     font-size: 16px;
`

export const Meditation = styled.h2`
    color: #16195E;
    font-size: 45px;
    margin-top: -10px;
`

export const Doctor = styled.p`
    margin-top: -10px;
    color: #16195E;
    font-size: 15px;
    font-weight: bold;
`
