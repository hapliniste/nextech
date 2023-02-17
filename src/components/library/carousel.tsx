import * as React from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const ScrollWrapper = styled.div`
    background: none;
    height: 100%;
    width: 100%;
    margin: auto;
    //padding-left: 10em;
    //padding-right: 10em;
    display: flex;
    gap: 1em;

    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        //background: transparent;  /* Optional: just make scrollbar invisible */
    }

    mask-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 1) 5%,
        rgba(255, 255, 255, 1) 95%,
        rgba(0, 0, 0, 0) 100%
    );

    //scroll-padding: 0 0 0 0;
`;

const Content = styled.div`
    scroll-snap-align: center;
    //transform-origin: center;
    width: 100%;
    height: 100%;
    /*display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;*/
    //scroll-margin-left: 0em;
`;

const SpacingCard = styled.div`
    width: 1em;
`;

/*export interface ICarouselProps {
    children: React.ReactNode[];
}*/

export interface ICarouselProps extends React.ComponentPropsWithRef<"div"> {
    children: React.ReactNode[];
}

export default function Carousel(props: ICarouselProps) {
    return (
        <ScrollWrapper>
            <Content key={uuid()}><SpacingCard /></Content>
            {props.children?.map((child) => {
                return <Content key={uuid()}>{child}</Content>;
            })}
            <Content key={uuid()}><SpacingCard /></Content>
        </ScrollWrapper>
    );
}
