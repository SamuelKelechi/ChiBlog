import React from 'react'
import styled from 'styled-components'
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Card2 from './Card/Card2';

export default function Sixth() {
  return (
    <SixthContain>
        <SixthMain>
            <SixthHead>
                <SixthHeadLeft>
                    <LeftHeadText>Daily curated articles <br/> for your healthcare</LeftHeadText>
                </SixthHeadLeft>
                <SixthHeadRight>
                    <AiFillLeftCircle color=' #16195E' fontSize={60}/>  <AiFillRightCircle color=' #16195E' fontSize={60}/>
                </SixthHeadRight>
            </SixthHead>
            <SixthCards>
                <Card2 
                firstLine='WELLNESS JAN 24, 2020'
                secondLineUp='Can meditation banish'
                secondLineDown='back pain?'
                thirdLineUp='Dr. Sanjay Gupta has the latest medical advice on how to'
                thirdLineDown='use exercise for a better sleep'
                />
                
                <Card2 
                firstLine='FITNESS JAN 25, 2020'
                secondLineUp='The latest on exercise'
                secondLineDown='and sleep'
                thirdLineUp='It might sem too good to be true that the relief from that'
                thirdLineDown='nagging backpain could be found in meditation and yoga'/>
            </SixthCards>
        </SixthMain>
    </SixthContain>
  )
}


const SixthContain = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 80px;
`

const SixthMain = styled.div`
    width: 90%;
    height: 100%;
    background-color: #F3F3F7;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SixthHead = styled.div`
    width: 90%;
    height: 200px;
    display: flex;
    justify-content: space-between;
`

const SixthHeadLeft = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const LeftHeadText = styled.h1`
    font-size: 75px;
    color: #16195E;
`

const SixthHeadRight = styled.div`
    width: 150px;
    height: 100%;
    margin-right: 150px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
`

const SixthCards = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
`