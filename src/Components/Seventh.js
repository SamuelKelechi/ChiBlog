import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import styled from 'styled-components'

export default function Seventh() {
  return (
    <SeventhContain>
        <SeventhMain>
            <SeventhHead>Get your own <br/> personalised plans</SeventhHead>
            <SeventhPara>Start consulting with us about your health condition for free</SeventhPara>
            <SeventhButton>Try for free <BsArrowRightShort color='white' fontSize={40}/></SeventhButton>
        </SeventhMain>
    </SeventhContain>
  )
}


const SeventhContain = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
`

const SeventhMain = styled.div`
    width: 90%;
    height: 100%;
    background-color: #16195E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`

const SeventhHead = styled.h1`
    font-size: 75px;
    text-align: center;
`

const SeventhPara = styled.p`
    text-align: center;
    font-size: 20px;
    margin-top: -25px;
`

const SeventhButton = styled.button`
    width: 200px;
    height: 55px;
    border: none;
    color: white;
    font-size: 20px;
    background-color: #00A962;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`