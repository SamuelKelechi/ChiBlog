import React from 'react'
import {
    Card2Contain,
    Yoga,
    Wellness,
    Meditation,
    Doctor
} from './Card2.Element'

function Card2(props) {
  return (
    <Card2Contain>
        <Yoga Bg = {props.Bg}></Yoga>
        <Wellness>{props.firstLine}</Wellness>
        <Meditation> {props.secondLineUp} <br/> {props.secondLineDown}</Meditation>
        <Doctor> {props.thirdLineUp} <br/> {props.thirdLineDown}</Doctor>
    </Card2Contain>
  )
}

export default Card2