import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <span>beny &copy; {new Date().getFullYear()}. Last updated</span>
      <span>&nbsp; AUG 2021</span>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  max-width: var(--maxWidth-xl);
  margin: 20vh auto 1.65rem auto;
  padding: 0 0.8rem;
`
