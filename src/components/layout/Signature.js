import React from "react"
import styled from "styled-components"

const Signature = () => {
  return (
    <Container>
      <h1>BENY</h1>
      <div />
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
    font-weight: light;
    color: var(--borderColor);
  }

  div {
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 50rem;
    width: 50rem;
    border: 1px solid var(--borderColor);
  }
`
