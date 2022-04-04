import React from 'react'
import styled from 'styled-components'
import Mangirl from '../Images/mangirl.png'
import { BsArrowRightShort } from "react-icons/bs";

export default function Second() {
  return (
    <Container>
        <NavBar>
            <Left>
                <LeftText><strong>trafo</strong>health</LeftText>
            </Left>
            <Middle>
                <MiddleNavs href='#'>Plans</MiddleNavs>
                <MiddleNavs href='#'>Membership</MiddleNavs>
                <MiddleNavs href='#'>Our Doctors</MiddleNavs>
                <MiddleNavs href='#'>Services</MiddleNavs>
                <MiddleNavs href='#'>Blog</MiddleNavs>
            </Middle>
            <Right>
                <Try>Try for free</Try>
            </Right>
        </NavBar>
        <PostNavBar>
            <Medical>
                <Medicaltext>Medical care <br/> simplified for <br/> everyone</Medicaltext>
                <MedicalPara>A new way to transform  your daily medical care <br/>
                into the simplest and effective one</MedicalPara>
                <MedicalButton>Try for free <BsArrowRightShort  fontSize={30}/></MedicalButton>
            </Medical>
            <Father></Father>
        </PostNavBar>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NavBar = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    margin-top: 200px;
`

const Left = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LeftText = styled.p`
    color: #16195E;
    font-size: 35px;
`

const Middle = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const MiddleNavs = styled.a`
    text-decoration: none;
    color: #16195E;
    font-size: 25px;
    font-weight: bold;
`

const Right = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Try = styled.button`
    width: 180px;
    height: 60px;
    background-color: #00A962;
    color: white;
    border: none;
    font-size: 20px;
`

const PostNavBar = styled.div`
    width: 90%;
    height: 90vh;
    display: flex;
`

const Medical = styled.div`
    width: 50%;
    height: 100%;
    background-color: #16195E;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 120px;
`

const Medicaltext = styled.h1`
    font-size: 75px;
    font-weight: bold;
`

const MedicalPara = styled.p`
    font-size: 20px;
    margin-top: -20px;
`

const MedicalButton = styled.button`
    font-size: 20px;
    width: 170px;
    height: 50px;
    background-color: #00A962;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Father = styled.div`
    width: 50%;
    height: 100%;
    background: url(${Mangirl});
    background-position: center;
    background-size: cover;
`