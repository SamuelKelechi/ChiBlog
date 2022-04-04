import React from 'react'
import Phone from '../Images/Phone.png'
import styled from 'styled-components'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function() {
 return (
    <FourthContain>
        <FourthMain>
            <PhoneContain>
                <PhoneImage src={Phone}/>
            </PhoneContain>
            <OtherContain>
                <HandyText>A handy way to <br/> get treatment</HandyText>
                <Services>
                    <Number>
                        <GreenNumber>1</GreenNumber>
                    </Number>
                    <Writing>
                        <LargeWriting>Services for your needs</LargeWriting>
                        <SmallWriting>Everybody always have different needs and we <br/>
                        provide options for you and your needs</SmallWriting>
                    </Writing>
                    <Arrow><BsChevronUp fontSize={30}/></Arrow>
                </Services>
                <Choose>
                    <Numberr>
                        <GreenNumber>2</GreenNumber>
                    </Numberr>
                    <Writingg>
                        <LargeWritingg>Choose your doctor</LargeWritingg>
                    </Writingg>
                    <Arroww>
                        <BsChevronDown fontSize={30}/>
                    </Arroww>
                </Choose>
                <Get>
                    <Numberr>
                        <GreenNumber>3</GreenNumber>
                    </Numberr>
                    <Writingg>
                        <LargeWritingg>Get an appointment</LargeWritingg>
                    </Writingg>
                    <Arroww>
                        <BsChevronDown fontSize={30}/>
                    </Arroww>
                </Get>
            </OtherContain>
        </FourthMain>
    </FourthContain>
  )
}


const FourthContain = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const FourthMain = styled.div`
    width: 90%;
    height: 100%;
    background-color: #16195E;
    display: flex;
`

const PhoneContain = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const PhoneImage = styled.img``

const OtherContain = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const HandyText = styled.h1`
    color: white;
    font-size: 75px;
`

const Services = styled.div`
    width: 75%;
    height: 130px;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
`

const Number = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const GreenNumber = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00A962;
`

const Writing = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const LargeWriting = styled.h1`
    color: white;
    font-size: 30px;
    margin-top: -4px;
`

const SmallWriting = styled.p`
    color: gray;
    font-size: 20px;
    margin-top: -9px;
`

const Arrow = styled.div`
    width: 10%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 5px;
`


const Choose = styled.div`
    width: 75%;
    height: 120px;
    display: flex;
    justify-content: space-between;
`

const Numberr = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Writingg = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const LargeWritingg = styled.h1`
    color: white;
    font-size: 35px;
`


const Arroww = styled.div`
    width: 10%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Get = styled.div`
    width: 75%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
`