//import '@/styles/globals.css'
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

//import '@/styles/styleReset.css';
import 'normalize.css/normalize.css';

import { Main } from "@/layout/Main";

import { lightTheme, darkTheme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setCurrentTheme(isDarkMode ? darkTheme : lightTheme);
    console.log("Current prefered theme is: " + isDarkMode);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}
