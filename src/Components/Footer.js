import React from 'react'
import styled from 'styled-components'
import { BsFillArrowRightCircleFill, BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa"

export default function Footer() {
  return (
    <FooterContain>
        <FooterMain>
            <FooterNavs>
                <FooterNavsLeft>
                    <CompanyContain>
                        <Company>COMPANY</Company>
                        <Others>Press</Others>
                        <Others>Our Company</Others>
                        <Others>Affiliate</Others>
                        <Others>Careers</Others>
                    </CompanyContain>
                    <CompanyContain>
                        <Company>HELP</Company>
                        <Others>FAQs</Others>
                        <Others>Contact Us</Others>
                        <Others>Pricing</Others>
                    </CompanyContain>
                    <CompanyContain>
                        <Company>LEGAL</Company>
                        <Others>Terms of Service</Others>
                        <Others>Privacy Policy</Others>
                        <Others>TrafoHealth PDA</Others>
                    </CompanyContain>
                </FooterNavsLeft>
                <FooterNavsRight>
                    <Company>KEEP UP WITH US</Company>
                    <Only>Stay up to date by readig our high quality <br/> articles personalized for you</Only>
                    <Email>Write your email here <BsFillArrowRightCircleFill color='#00A962' /></Email>
                </FooterNavsRight>
            </FooterNavs>
            <CopyrightNav>
                <Copyright>©2020 TrafoHealth. All Rights Reserved</Copyright>
                <SocialIcons>
                   <WhiteCircle><FaFacebookF fontSize={20}/></WhiteCircle>
                   <WhiteCircle><AiOutlineTwitter fontSize={20}/></WhiteCircle>
                   <WhiteCircle><AiOutlineInstagram fontSize={20}/></WhiteCircle>
                   <WhiteCircle><BsYoutube fontSize={20}/></WhiteCircle>
                </SocialIcons>
            </CopyrightNav>
        </FooterMain>
    </FooterContain>
  )
}
const FooterContain = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
`

const FooterMain = styled.div`
    width: 90%;
    height: 97%;
    background-color: #050738;
    border-radius: 0px 0px 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FooterNavs = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: space-around;
    margin-top: 150px;
`

const FooterNavsLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
`

const CompanyContain = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Company = styled.p`
    color: rgb(255, 255, 255, 0.7);
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 15px;
`

const Others = styled.p`
    color: white;
    font-size: 17px;
    font-weight: bold;
`

const FooterNavsRight = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Only = styled.p`
    color: white;
    font-size: 17px;
`

const Email = styled.div`
    width: 85%;
    height: 100px;
    border-bottom: 1px solid gray;
    color:  rgb(255, 255, 255, 0.7);
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CopyrightNav = styled.div`
    width: 93%;
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`

const Copyright = styled.div`
    width: 30%;
    height: 100%;
    font-size: 20px;
    color:  rgb(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
`

const SocialIcons = styled.div`
    width: 13%;
    height: 100%;
    margin-right: 75px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const WhiteCircle = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`