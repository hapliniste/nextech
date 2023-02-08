import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";
import styled from "styled-components";

const ColorName = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.textColor};
  margin: 0;
`;

const ThemeShowcase = ({ theme }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: theme.primaryColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Primary Color</ColorName>
      <div
        style={{
          backgroundColor: theme.secondaryColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Secondary Color</ColorName>
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Background Color</ColorName>
      <div
        style={{
          backgroundColor: theme.cardBackground,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Card Background</ColorName>
      <div
        style={{
          backgroundColor: theme.textColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Text Color</ColorName>
      <div
        style={{
          backgroundColor: theme.highlightColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Highlight Color</ColorName>
      <div
        style={{
          backgroundColor: theme.visitedColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Visited Color</ColorName>
      <div
        style={{
          backgroundColor: theme.borderColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Border Color</ColorName>
      <div
        style={{
          backgroundColor: theme.successColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Success Color</ColorName>
      <div
        style={{
          backgroundColor: theme.errorColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Error Color</ColorName>
      <div
        style={{
          backgroundColor: theme.warningColor,
          width: "100px",
          height: "100px",
        }}
      />
      <ColorName>Warning Color</ColorName>
    </div>
  );
};

const themePage = () => {
  return (
    <>
      <h2>Light Theme</h2>
      <ThemeProvider theme={lightTheme}>
        <ThemeShowcase theme={lightTheme} />
      </ThemeProvider>
      <h2>Dark Theme</h2>
      <ThemeProvider theme={darkTheme}>
        <ThemeShowcase theme={lightTheme} />
      </ThemeProvider>
    </>
  );
};

export default themePage;
