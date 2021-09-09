import React from "react"
import Clock from "react-live-clock"
import styled, { css } from "styled-components"

import HongKongFlag from "../../images/hong-kong.svg"

const Nav = () => {
  return (
    <NavWrapper>
      <SectionWrapper>
        <div>UX / UI DESIGNER @ HEX TRUST</div>
        <div>
          <Clock format={"LT"} ticking={true} timezone={"Asia/Hong_Kong"} />
          <span>&nbsp; IN HONG KONG</span>
        </div>
        <img src={HongKongFlag} alt="Hong Kong flag" />
      </SectionWrapper>
      <SectionWrapper>
        <SocialMediaLink
          href="https://www.linkedin.com/in/beny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>LINKEDIN</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </SocialMediaLink>
        <SocialMediaLink
          href="mailto: b.yeung2018@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>EMAIL</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </SocialMediaLink>
        <SocialMediaLink
          href="https://behance.net/beewai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>BEHANCE</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </SocialMediaLink>
      </SectionWrapper>
    </NavWrapper>
  )
}

export default Nav

const flex = css`
  display: flex;
  align-items: center;
`

const NavWrapper = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ${flex};
  justify-content: space-between;
  width: 100%;
  padding: 0.7rem 1.3rem;
  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: saturate(180%) blur(20px);
  /* border-bottom: 1px solid var(--borderColor); */
  font-weight: bold;
`

const SectionWrapper = styled.div`
  ${flex};

  & > *:not(:last-child) {
    margin-right: 1.13rem;
  }

  img {
    display: block;
    height: 1.35rem;
    width: 1.35rem;
  }
`

const SocialMediaLink = styled.a`
  ${flex};

  svg {
    margin-left: 0.3rem;
    height: 1.5rem;
    width: 1.5rem;
  }
`
