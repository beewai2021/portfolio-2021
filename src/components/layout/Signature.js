import React from "react"
import styled from "styled-components"

const Signature = () => {
  return (
    <Container>
      <h1>BENY</h1>
      <div>
        <img
          src="https://static.wixstatic.com/media/7e85a2_3e1070d3f9764098ad9a115fa408c222~mv2.gif"
          alt="camp fire"
        />
      </div>
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
    font-size: 8.5rem;
    font-weight: light;
  }

  div {
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 50rem;
    width: 50rem;
    opacity: 0.5;

    img {
      height: 100%;
      width: 100%;
    }
  }
`
