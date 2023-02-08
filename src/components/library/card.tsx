import * as React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

export interface ICardProps {
    title: string;
    content: string[];
}

const StyledCard = styled.div`
    width: 20em;
    height: 30em;
    //margin: 2em;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 15em;
    background-color: red;
`;

const StyledTitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
`;

const StyledContent = styled.p`
    font-size: 14px;
    margin: 8px 0;
`;

export default function Card(props: ICardProps) {
    return (
        <StyledCard>
            <StyledImage />
            <StyledTitle>{props.title}</StyledTitle>
            {props.content.map((line) => {
                return <StyledContent key={uuid()}>{line}</StyledContent>;
            })}
        </StyledCard>
    );
}
