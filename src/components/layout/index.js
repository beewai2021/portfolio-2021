import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import ProjectPopup from "../ProjectPopup"
import VerticalColumns from "./VerticalColumns"
import Nav from "../Nav"
import Footer from "../Footer"
import Signature from "./Signature"

const GlobalStyle = createGlobalStyle`
  ${reset};

  /* TODO: add dark mode */
  /* TODO: add reduced motion for clay video + project gifs */

  :root {
    --bodyBackgroundColor: white;
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

  html {
    font-size: 62.5%;
    /* font-size: 85%; // test ui scaling */
    font-family: sans-serif;
  }
  
  body {
    overscroll-behavior: none;
    padding: 0 1.3rem;
    background-color: var(--bodyBackgroundColor);
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
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

  a {
    font: inherit;
    color: inherit;
  }

  ::selection {
    background: #1F2937;
    color: #F9FAFB;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <NoiseOverlay />
      <ProjectPopup />
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
