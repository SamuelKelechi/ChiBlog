import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Head>
        <LeftHead>
           <Dribble>
             <DribbleText href='https://dribbble.com' target='_blank'>dribbble</DribbleText>
           </Dribble>
           <Health>
               <HealthText>TrafoHealth - Landing Page Concept</HealthText>
               <By>by <African href='https://dribbble.com/afrianhanafi'  target='_blank'>Afrian Hanafi</African></By>
           </Health>
        </LeftHead>
        <RightHead>
            <RightCard></RightCard>
            <RightCardRed></RightCardRed>
        </RightHead>
    </Head>
  )
}

const Head = styled.div`
    width: 100%;
    height: 170px;
    border-bottom: 3px solid lightgray;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    background-color: white;
`

const LeftHead = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    margin-left: 20px;
`

const Dribble = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DribbleText = styled.a`
    text-decoration: none;
    font-family: cursive;
    font-size: 30px;
    font-style: italic;
    color: black;
`

const Health = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 0px;
    margin-left: 20px;
`

const HealthText = styled.h2`
    font-size: 30px;
`

const By = styled.p`
    font-size: 25px;
    color: gray;
`

const African = styled.a`
    text-decoration: none;
    font-size: 25px;
    color: red;
`

const RightHead = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const RightCard = styled.div`
    width: 40%;
    height: 60%;
    background-color: rebeccapurple;
    border-radius: 5px;
`

const RightCardRed = styled.div`
    width: 40%;
    height: 60%;
    background-color: rebeccapurple;
    border-radius: 5px;
    border: 3px solid red;
`

