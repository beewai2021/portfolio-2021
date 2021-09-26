import React from "react"
import useDarkMode from "use-dark-mode"
import Clock from "react-live-clock"
import styled, { css } from "styled-components"

import HongKongFlag from "../../images/hong-kong.svg"

const Nav = () => {
  const { toggle, value } = useDarkMode(false)

  return (
    <NavWrapper>
      <SectionWrapper>
        <h3>UX / UI DESIGNER @ HEX TRUST</h3>
        <h3>
          <Clock format={"LT"} ticking={true} timezone={"Asia/Hong_Kong"} />
          <span>&nbsp; IN HONG KONG</span>
        </h3>
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
        <DarkModeButton onClick={toggle}>
          {value ? (
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </DarkModeButton>
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
  border-bottom: 1px solid var(--borderColor);
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
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 0.3rem;
    pointer-events: none;
  }
`

const DarkModeButton = styled.button`
  svg {
    height: 1.8rem;
    width: 1.8rem;
  }
`
