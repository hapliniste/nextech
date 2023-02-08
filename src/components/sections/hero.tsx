import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import gsap from 'gsap';

import { AppConfig } from "@/utils/AppConfig";


import { DM_Sans } from '@next/font/google'
const DMSansFont = DM_Sans({ subsets: ['latin'], weight: ['400'] })

import { Raleway } from '@next/font/google'
const titleFont = Raleway({ subsets: ['latin'], weight: ['900'] })

/*
This Hero component displays the main header on the left, description below and logo on the right?

Desktop: the text should be centered and at 60% width
Mobile: the text should take 80% width
*/

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;

    width: 100%;
    height: 100%;

    background: ${(props) => props.theme.secondaryColor};;
    background-image: url('/HeroBackground01.png');
    background-position: bottom right;
    //background-size: cover;
    background-repeat: no-repeat;
    background-size: 40%;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-left: 10%;
    width: 60%;
    padding: ${(props) => props.theme.spacing};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.white};
    font-size: 60pt;
    //font-size: 800%;
    //text-transform: uppercase;   
    margin: 0;
`;
const TitleColor = styled.span`
    color: ${(props) => props.theme.primaryColor};
`;
const TitleGradient = styled.span`
    background: rgb(227,26,68);
    background: linear-gradient(115deg, rgba(227,26,68,1) 0%, rgba(230,95,83,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Description = styled.div`
    width: 80%;
    color: ${(props) => props.theme.white};
    font-size: 18pt;
    margin-top: 2em;
`;
const Line = styled.p`
margin: 0;
margin-bottom: 0.5em;
`

const Hero: React.FC = () => {
    const titleRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(titleRef.current, {opacity: 0}, {opacity: 1, duration: 1});
    }, [])

    return (
        <Section>
            <TextWrapper>
                <div ref={titleRef}>
                    <Title className={titleFont.className}><TitleColor>Nextech</TitleColor> simplifies</Title>
                    <Title className={titleFont.className}>your <TitleGradient>Digital Journey</TitleGradient></Title>
                </div>
                <Description className={DMSansFont.className} ref={descRef}>
                    <Line>We create websites and apps that are both visually stunning and built with solid technologies for you long-term success.</Line>
                    <Line>Our fast and easy process will make you feel at ease and give you the confidence to take your business to the next level.</Line>
                </Description>
            </TextWrapper>
        </Section>
    );
};
export default Hero;
