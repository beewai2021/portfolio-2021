import React from "react"
import styled from "styled-components"

import Clay from "../../images/clay.png"

const Signature = () => {
  return (
    <Container>
      <h1>beny</h1>
      <img src={Clay} alt="clay" />
    </Container>
  )
}

export default Signature

const Container = styled.div`
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
