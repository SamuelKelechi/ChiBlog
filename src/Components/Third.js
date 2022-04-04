import React from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
import Chat from '../Images/Chaticon.png'
import Door from '../Images/Dooricon.png'
import File from '../Images/Fileicon.png'



export default function Third() {
  return (
    <ThirdContain>
        <ThirdContainText>
            <ChangingText>Changing the way <br/> you manage your <br/> health care</ChangingText>
        </ThirdContainText>
        <ThirdContainCards>
            <Card 
            Firstline='Online consultation'
            Secondline='with your doctor'
            Image={Chat}/>
            
            <Card 
            Firstline='Medicine on your'
            Secondline='front door'
            Image={Door}/>
            
            <Card 
              Firstline='Digital medical'
              Secondline='records'
              Image={File}/>
        </ThirdContainCards>
    </ThirdContain>
  )
}


const ThirdContain = styled.div`
    width: 100%;
    height: 90vh;
    margin-top: 100px;
`

const ThirdContainText = styled.div`
    width: 70%;
    height: 50%;
    color: #16195E;
    margin-left: 100px;
`

const ChangingText = styled.h1`
    font-size: 70px;
    font-weight: 800;
`

const ThirdContainCards = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
`
