import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import reset from "styled-reset"
import { isMobile } from "react-device-detect"

import useReduceMotion from "../../hooks/useReduceMotion"

import Cursor from "./Cursor"
import ProjectPopup from "../ProjectPopup"
import VerticalColumns from "./VerticalColumns"
import Nav from "../Nav"
import Footer from "../Footer"
import Signature from "./Signature"

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'DroidSansMono';
    src: url('/fonts/DroidSansMono.ttf');
  };

  :root {
    --bodyBackgroundColor: antiquewhite;
    --borderColor: rgba(0, 0, 0, 0.15);
    --maxWidth-xl: 1650px;
    --verticalBorders-xl: 800px;
    --projectAspectRatio: calc(1440 / 1024);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html, body {
    cursor: none;
  }

  html {
    font-size: 62.5%;
    /* font-size: 85%; // test ui scaling */
    font-family: 'DroidSansMono', sans-serif;
  }
  
  body {
    overscroll-behavior: none;
    padding: 0 1.3rem;
    background-color: var(--bodyBackgroundColor);
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1, h3 {
    font-family: 'Press Start 2P', sans-serif;
  }

  img,
  video {
    display: block;
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: 50% 50%;
  }

  a, button {
    border: inherit;
    background: inherit;
    font: inherit;
    font-family: 'Press Start 2P', sans-serif;
    color: inherit;
    cursor: inherit;
  }

  ::selection {
    background: #1F2937;
    color: #F9FAFB;
  }
`

const Layout = ({ children }) => {
  const reduceMotion = useReduceMotion()

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <NoiseOverlay />
      {!isMobile && <Cursor />}
      <ProjectPopup reduceMotion={reduceMotion} />
      <VerticalColumns />
      <Nav />
      <MainContent>
        <VerticalGutter />
        {children}
        <Footer />
      </MainContent>
      <Signature />
    </>
  )
}

export default Layout

const NoiseOverlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  background-image: url("/noise.png");
  background-position: 0 0;
  background-size: 250px;
  opacity: 0.36;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /* vertical gutter & footer */
  & > *:first-child,
  & > *:last-child {
    flex-shrink: 0;
  }

  /* main content */
  & > *:nth-child(2) {
    flex-grow: 1;
  }
`

const VerticalGutter = styled.div`
  z-index: -1;
  height: 6vh;
  width: 100%;
  background-color: transparent;
  pointer-events: none;
`
