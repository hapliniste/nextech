import React, { useRef } from "react";
import styled from "styled-components";
import Head from "next/head";

import ContactForm from "@/components/sections/contactForm";
import Hero from "@/components/sections/hero";
import Numerique from "@/components/sections/numerique";
import Portfolio from "@/components/sections/portfolio";
import Prix from "@/components/sections/prix";
import Temoignages from "@/components/sections/temoignages";
import Valeurs from "@/components/sections/valeurs";

import ScrollSection from "@/components/sections/scrollSection";
/*
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
*/

const ScrollContainer = styled.div`
    width: 100%;
    height: calc(100vh - ${({ theme }) => theme.appBarHeight});
    background-color: red;

    scroll-snap-type: y mandatory;
    overflow-y: scroll;

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
`;

export default function Home() {
    const scrollContainerRef: React.Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);

    return (
        <ScrollContainer ref={scrollContainerRef}>
            {/*Hero section*/}
            <ScrollSection>
                <Hero />
            </ScrollSection>
            {/*Later: GPT3 assistant (or in Hero?)*/}

            {/*Nos valeurs*/}
            <ScrollSection>
                <Valeurs scrollerRef={scrollContainerRef}/>
            </ScrollSection>
            {/*Prix*/}
            <ScrollSection>
                <Prix />
            </ScrollSection>
            {/*L'importance du numérique*/}
            <ScrollSection>
                <Numerique />
            </ScrollSection>
            {/*Portfolio*/}
            <ScrollSection>
                <Portfolio />
            </ScrollSection>
            {/*Témoignages*/}
            <ScrollSection>
                <Temoignages />
            </ScrollSection>
            {/*Formulaire de contact*/}
            <ScrollSection>
                <ContactForm />
            </ScrollSection>
        </ScrollContainer>
    );
}
