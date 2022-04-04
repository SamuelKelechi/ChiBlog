import React from 'react'
import styled from 'styled-components'
import Boy from '../Images/Guy.jpg'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Fifth() {
  return (
    <FifthContain>
        <FifthMain>
            <FifthMainText>
                <FirstText>Your health is <br/> our number one <br/> priority</FirstText>
                <SecondText>Everyone deserves a better treatment for their health care <br/>
                including you and that's our main priority</SecondText>
                <Quote>
                    <LongQuote>Nam libero tempore, cum soluta nobis est elingedi optio <br/>
                    cumque nihil impedit quo minus is quod maxime placeat <br/>
                    facere possimus, omnis voluptas assumenda est</LongQuote>
                    <Name>-Thomas Frank Anthony</Name>
                    <Founder>Founder of Yogasm</Founder>
                </Quote>
                <See>
                    <SeeMore>See more stories</SeeMore>
                    <BsFillArrowRightCircleFill color='#00A962' fontSize={22}/>
                </See>
            </FifthMainText>
            <FifthMainBoy></FifthMainBoy>
        </FifthMain>
    </FifthContain>
  )
}

const FifthContain = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`

const FifthMain = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-around;
`

const FifthMainText = styled.div`
    width: 40%;
    height: 100%;
`

const FifthMainBoy = styled.div`
    width: 40%;
    height: 100%;
    background-image: url(${Boy});
    background-position: center;
    background-size: cover;
`

const FirstText = styled.h1`
    color: #16195E;
    font-size: 75px;
    font-weight: 800;
`

const SecondText = styled.p`
     color: #5D5F8F;
    font-size: 20px;
    font-weight: bold;
`
const Quote = styled.div`
    width: 95%;
    border-left: 5px solid #12AF6D;
    height: 200px;
    background-color: #F2FAF7;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 15px;
`

const LongQuote = styled.p`
    font-size: 20px;
    color: black;
`

const Name = styled.p`
    color: black;
    font-weight: bold;
    font-size: 20px;
    margin-top: -10px;
`

const Founder = styled.p`
    font-size: 17px;
    color: gray;
    margin: -15px 0 0 13px;
`

const See = styled.div`
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
`

const SeeMore = styled.p`
    font-size: 21px;
    font-weight: bold;
    color:  #56588A;
`