import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ButtonLink = ({ internalLink = true, url, text }) => {
  return internalLink ? (
    <Link to={url}>
      <Button>
        {text}
        <ArrowSVG />
      </Button>
    </Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button>
        {text}
        <ArrowSVG />
      </Button>
    </a>
  )
}

export default ButtonLink

const Button = styled.button`
  position: relative;
  width: max-content;
  padding: 1.6rem 1.75rem 1.6rem 1.4rem;
  border: 1px solid var(--borderColor);
  border-radius: 0.8rem;
  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: saturate(180%) blur(20px);
  font-size: 2.4rem;
  text-decoration-line: none;

  &:hover {
    cursor: pointer;

    svg {
      transform: translateY(-50%) translateX(25%);
    }
  }

  svg {
    position: absolute;
    top: 50%;
    right: -0.7rem;
    width: 1.85rem;
    transform: translateY(-50%);
    transition: 0.2s ease transform;
  }
`

const ArrowSVG = () => (
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
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
)
