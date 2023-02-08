import Link from "next/link";
import type { ReactNode } from "react";
import styled from "styled-components";

import { AppConfig } from "@/utils/AppConfig";

type IMainProps = {
  children: ReactNode;
};

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  //display: flex;
  //flex-direction: column;
  background-color: pink;//${(props) => props.theme.backgroundColor};
`;

const AppBar = styled.div`
  //position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;//${({ theme }) => theme.spacing};
  margin: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  height: ${({ theme }) => theme.appBarHeight};
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  margin-right: ${({ theme }) => theme.spacing};
  &:hover {
    color: ${({ theme }) => theme.highlightColor};
  }
  &:visited {
    color: ${({ theme }) => theme.visitedColor};
  }
`;

const MenuIcon = styled.div`
  font-size: 2rem;
`;

const ContentWrapper = styled.div`
  //flex-grow: 1;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize};
  color: ${({ theme }) => theme.textColor};
  background-color: yellow;//${({ theme }) => theme.backgroundColor};
`;

const FooterWrapper = styled.div`
  //border-top: 1px solid ${({ theme }) => theme.borderColor};
  //padding: ${({ theme }) => theme.spacing};
  font-size: ${({ theme }) => theme.fontSize};
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Main = (props: IMainProps) => (
  <MainWrapper>
    <AppBar>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/gallery/">Gallery</NavLink>
        <NavLink href="/themePage/">Theme</NavLink>
      </NavLinks>
      <Logo>{AppConfig.title}</Logo>
      <MenuIcon>☰</MenuIcon>
    </AppBar>

    <ContentWrapper>{props.children}</ContentWrapper>

    {/*<FooterWrapper>
      © Copyright {new Date().getFullYear()} {AppConfig.title}.
</FooterWrapper>*/}
  </MainWrapper>
);

export { Main };
