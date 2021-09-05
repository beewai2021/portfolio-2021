import * as React from "react"
import styled, { css } from "styled-components"

import { usePopupContext } from "../PopupProvider"
import { PROJECT_CONSTANTS } from "../project_data"

const IndexPage = () => {
  const { changeProject } = usePopupContext()

  return (
    <main>
      <Hero>
        <ProjectsSection>
          <Project>
            <ProjectItem />
          </Project>
          <SmallProjects>
            <Project small>
              <ProjectItem
                onClick={() => changeProject(PROJECT_CONSTANTS.altair)}
              />
            </Project>
            <Project small>
              <ProjectItem
                onClick={() => changeProject(PROJECT_CONSTANTS.pocketTrader)}
              />
            </Project>
            <Project small>
              <ProjectItem
                onClick={() => changeProject(PROJECT_CONSTANTS.gameChanger)}
              />
            </Project>
            <Project small>
              <ProjectItem
                onClick={() => changeProject(PROJECT_CONSTANTS.miqs)}
              />
            </Project>
          </SmallProjects>
        </ProjectsSection>
        <JobStatus>
          <Availability>NOT AVAILABLE FOR FULL TIME WORK</Availability>
          <Opportunities>
            But looking for exciting part time opportunities in the crypto
            industry
          </Opportunities>
        </JobStatus>
      </Hero>
      <Bio>
        <Introduction>
          <div>
            <h1>Who am I?</h1>
            <p>
              I’m a self-taught product designer and front-end web developer
              with a lot of fire to burn and heart to share.
            </p>
          </div>
          <div>
            <h1>What can I do for you?</h1>
            <p>
              Product design, for web and/or mobile, product strategy and
              direction, what’s on your mind?
            </p>
            <p>I’ve worked for these companies:</p>
            <div>
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
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p>
              in Hong Kong and mainland China. Interacted in fluent English,
              普通话, and 廣東話, and worked with bright individuals from
              different countries and cultural backgrounds.
            </p>
          </div>
          <div>
            <h1>How can I benefit you?</h1>
            <p>
              My technical expertise includes, but is not limited to: Sketch,
              Invision, ReactJS, CSS, front-end design and development.
            </p>
            <p>
              I’m currently learning three.js, GSAP, motion design, and more.
            </p>
            <div>
              My other interests include:
              <ul>
                <li>// Cryptocurrency</li>
                <li>// Philosophy</li>
                <li>// Product strategy</li>
                <li>// Team management</li>
              </ul>
            </div>
          </div>
        </Introduction>
        <EmailButton
          href="mailto: b.yeung2018@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send me an email
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
        </EmailButton>
      </Bio>
    </main>
  )
}

export default IndexPage

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: var(--maxWidth-xl);
  margin: 0 auto;
`

const ProjectsSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: var(--verticalBorders-xl);
`

const SmallProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.5rem;
  margin-top: 2.73rem;
`

const ProjectItem = styled.div`
  height: 100%;
  border: 1px solid black;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`

const Project = styled.div`
  height: ${({ small }) =>
    small
      ? `calc(var(--verticalBorders-xl) / var(--projectAspectRatio) * 0.5)`
      : `calc(var(--verticalBorders-xl) / var(--projectAspectRatio))`};
  width: 100%;

  ${({ small }) =>
    small &&
    css`
      ${ProjectItem} {
        width: ${({ small }) => (small ? "96%" : "100%")};
      }
    `}
`

const JobStatus = styled.aside`
  position: relative;
  margin-top: 3.2vh;
  padding: 0.6rem 0.4rem 0.6rem 0;
  text-align: right;

  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 80%;
    border: 1px solid var(--borderColor);
  }
`

const Availability = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const Opportunities = styled.div`
  max-width: 22rem;
  margin-left: auto;
`

const Bio = styled(Hero)`
  margin-top: 3rem;
`

const Introduction = styled(ProjectsSection)`
  min-height: auto;
  padding-top: 0;
  transform: translateX(0.35rem);

  & > *:not(:last-child) {
    margin-bottom: 7.5rem;
  }

  h1 {
    margin-bottom: 1.4rem;
    font-size: 3.6rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 1.4rem;
    font-size: 1.4rem;
    width: 50%;
  }

  svg {
    margin-right: 0.3rem;
    margin-bottom: 1.4rem;
    height: 2.45rem;
    width: 2.45rem;
  }
`

const EmailButton = styled.a`
  position: relative;
  margin-top: 3.2rem;
  padding: 1.6rem 1.75rem 1.6rem 1.4rem;
  border: 1px solid var(--borderColor);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: saturate(180%) blur(20px);
  font-size: 2.4rem;
  text-decoration-line: none;

  &:hover {
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
