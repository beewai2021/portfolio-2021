import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import VerticalColumns from "./VerticalColumns"
import Nav from "../Nav"
import Footer from "../Footer"

import Clay from "../../images/clay.png"

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    --bodyBackgroundColor: #fbfbfb;
    --borderColor: rgba(0, 0, 0, 0.15);
    --maxWidth-xl: 1650px;
    --verticalBorders-xl: 800px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    /* font-size: 90%; // test ui scaling */
    font-family: sans-serif;
  }
  
  body {
    overscroll-behavior: none;
    padding: 0 1.3rem;
    background-color: var(--bodyBackgroundColor);
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: papayawhip;
  }

  a {
    font: inherit;
    color: inherit;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <NoiseOverlay />
      <VerticalColumns />
      <Nav />
      {children}
      <Footer />
      <Signature>
        <h1>beny</h1>
        <img src={Clay} alt="clay" />
      </Signature>
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

const Signature = styled.div`
  z-index: -1;
  position: fixed;
  right: 3vw;
  bottom: 2rem;
  pointer-events: none;

  h1 {
    font-size: 20rem;
    font-weight: bold;
    color: lightslategray;
  }

  img {
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 50rem;
  }
`
