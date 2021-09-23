import * as React from "react"
import styled, { css } from "styled-components"
import ButtonLink from "../components/Button"

import { usePopupContext } from "../PopupProvider"
import { PROJECT_CONSTANTS } from "../project_data"

const IndexPage = () => {
  const { changeProject } = usePopupContext()

  return (
    <main>
      <Hero>
        <ProjectsSection>
          <Project>
            <CurrentProjectItem>
              <h1>Currently building crypto things at Hex Trust</h1>
              <img
                src="https://media0.giphy.com/media/1g1H4WB8iLHSprAuIN/giphy.gif?cid=790b7611448a8b5360b9927cad9dfc9a69e9205199c6dac6&rid=giphy.gif&ct=s"
                alt="thinking gif"
              />
            </CurrentProjectItem>
          </Project>
          <PreviousProjects>Previous Projects</PreviousProjects>
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
              with a lot of passion to learn and heart to share.
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
              in places like Hong Kong and mainland China. Interacted in fluent
              English, 普通话, 廣東話, and worked with brilliant individuals
              from various countries and cultural backgrounds.
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
        <EmailButton>
          <ButtonLink
            internalLink={false}
            url={"mailto: b.yeung2018@gmail.com"}
            text={"Send me an email"}
          />
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

const PreviousProjects = styled.h1`
  margin: 2.7rem 0 1.3rem 0;
  font-size: 1.93rem;
  font-weight: bold;
`

const SmallProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.5rem;
`

const ProjectItem = styled.div`
  height: 100%;
  border: 1px solid black;
`

const CurrentProjectItem = styled(ProjectItem)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem;

  h1 {
    margin-bottom: 0.34rem;
    font-size: 2.75rem;
  }

  img {
    width: 6.5rem;
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
  margin-top: 5.25vh;
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

const Availability = styled.h3`
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

const EmailButton = styled.div`
  margin-top: 3.2rem;
`
