import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import {
    CardContain,
    IconContain, 
    TextContain,
    Learn, 
    Icon,
    LearnMore,
    GreenCircle
} from './Card.Element'


function Card(props) {
  return (
    <CardContain>
        <IconContain>
            <Icon src={props.Image}/>
        </IconContain>
        <TextContain> {props.Firstline} <br/> {props.Secondline}</TextContain>
        <Learn>
            <LearnMore>Learn More</LearnMore>
            <GreenCircle><BsArrowRightShort fontSize={25}/></GreenCircle>
        </Learn>
    </CardContain>
  )
}

export default Card