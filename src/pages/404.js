import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NotFoundPage = () => {
  return (
    <main>
      <Section>
        <Container>
          <h1>404 Page Not Found</h1>
          <p>
            <span>How did you end up here?</span> In the meantime, checkout one
            of my projects:
          </p>
          <Project>
            <ProjectItem />
          </Project>
          <p>Or you can head home–</p>
          <Link to="/">
            <HomeButton>
              Back to homepage
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
            </HomeButton>
          </Link>
        </Container>
      </Section>
    </main>
  )
}

export default NotFoundPage

const Section = styled.section`
  max-width: var(--maxWidth-xl);
  margin: 0 auto;
`

const Container = styled.div`
  width: calc(var(--verticalBorders-xl) * 0.75);

  h1 {
    margin-bottom: 4.4rem;
    font-size: 3.6rem;
    font-weight: bold;
  }

  p {
    margin: 1.4rem 0;
    font-size: 1.4rem;
    width: 50%;

    span {
      font-weight: bold;
    }
  }
`

const Project = styled.div`
  height: calc(var(--verticalBorders-xl) / var(--projectAspectRatio) * 0.75);
  width: 100%;
`

const ProjectItem = styled.div`
  height: 100%;
  border: 1px solid black;
  border-radius: 6px;
`

const HomeButton = styled.button`
  position: relative;
  width: max-content;
  padding: 1.6rem 1.75rem 1.6rem 1.4rem;
  border: 1px solid var(--borderColor);
  border-radius: 8px;
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
