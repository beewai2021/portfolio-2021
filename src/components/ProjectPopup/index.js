import React from "react"
import styled, { css } from "styled-components"

import { usePopupContext } from "../../PopupProvider"
import { PROJECT_DATA } from "../../project_data"

import Video from "./Video"

const ProjectPopup = ({ reduceMotion }) => {
  const {
    currentProject,
    popupOpen,
    previousProject,
    nextProject,
    togglePopup,
  } = usePopupContext()

  React.useEffect(() => {
    popupOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "initial")
  }, [popupOpen])

  React.useEffect(() => {
    const ESCAPE_KEY = 27
    const LEFT_KEY = 37
    const RIGHT_KEY = 39

    const detectKey = (e) => {
      switch (e.keyCode) {
        case ESCAPE_KEY:
          togglePopup()
          break
        case LEFT_KEY:
          previousProject()
          break
        case RIGHT_KEY:
          nextProject()
          break
      }
    }

    window.addEventListener("keydown", detectKey)
    return () => window.removeEventListener("keydown", detectKey)
  }, [])

  return popupOpen ? (
    <PopupContainer>
      <PopupBackground onClick={togglePopup} />
      <Popup>
        <CloseButton>
          <svg
            onClick={togglePopup}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </CloseButton>
        <PopupWrapper>
          <Projects>
            {PROJECT_DATA.projects[currentProject].videos.map(
              (videoUrl, index) => {
                return (
                  <Project key={index}>
                    <Video
                      index={index}
                      url={videoUrl}
                      reduceMotion={reduceMotion}
                    />
                  </Project>
                )
              }
            )}
          </Projects>
          <ProjectDescription>
            <h1>{PROJECT_DATA.projects[currentProject].name}</h1>
            <p>
              Atque ab magni a veniam quod. Earum deleniti debitis qui. Dolor
              tempore mollitia aut aliquam. Doloremque nulla facilis quia
              quisquam. Molestiae dolorem provident magnam debitis. Corporis
              quaerat id possimus voluptatem laudantium provident.
            </p>
            <Company>
              <span>For</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
              <span>{PROJECT_DATA.projects[currentProject].company.name}</span>
            </Company>
            <Date>
              <Time>
                <span>
                  {PROJECT_DATA.projects[currentProject].timeline.year}
                </span>
                <span>·</span>
                <span>
                  {PROJECT_DATA.projects[currentProject].timeline.duration}
                </span>
              </Time>
              <Line />
            </Date>
            <ProjectLinks>
              {PROJECT_DATA.projects[currentProject].urls.writeup && (
                <a
                  href={PROJECT_DATA.projects[currentProject].urls.writeup}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>PROJECT WRITEUP</span>
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
                </a>
              )}
              {PROJECT_DATA.projects[currentProject].urls.live && (
                <a
                  href={PROJECT_DATA.projects[currentProject].urls.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>SEE IT LIVE</span>
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
                </a>
              )}
            </ProjectLinks>
            <p>
              Sosum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button onClick={previousProject}>Previous Project</button>
            <button onClick={nextProject}>Next Project</button>
          </ProjectDescription>
        </PopupWrapper>
      </Popup>
    </PopupContainer>
  ) : null
}

export default ProjectPopup

const flex = css`
  display: flex;
  align-items: center;
`

const PopupContainer = styled.main`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.41);
  backdrop-filter: saturate(180%) blur(3.5px);
`

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Popup = styled.section`
  position: relative;
  height: 94.5%;
  width: 96.5%;
  max-width: var(--maxWidth-xl);
  margin: 0 auto;
  overflow-y: scroll;
  background-color: #1f1f1f;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  color: white;
`

const PopupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  grid-column-gap: 5.5rem;
  margin: 1.85rem 0 7.5rem 0;
  padding: 0 7.5rem;
`

const CloseButton = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding-top: 0.35rem;
  padding-right: 0.35rem;

  svg {
    width: 5.5rem;
    stroke: darkgray;
  }
`

const Projects = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 2.25rem;
  }
`

const Project = styled.div`
  height: calc(
    ((var(--maxWidth-xl) - (7.5rem * 2) - 55px) / 2) /
      (var(--projectAspectRatio))
  );
  background-color: #2f2f2f;
`

const ProjectDescription = styled.article`
  position: sticky;
  top: 0;
  padding-top: 6.3rem;

  h1 {
    margin-bottom: 3.8rem;
    font-size: 3.9rem;
    font-weight: bold;
  }

  p {
    margin: 1.4rem 0;
    font-size: 1.4rem;
  }

  svg {
    width: 1.85rem;
  }
`

const Company = styled.div`
  ${flex};
  margin: 1.2rem 0;
  font-size: 1.33rem;
`

const Date = styled.div`
  ${flex};
  margin: 1.2rem 0;
  font-size: 1.33rem;
`

const Time = styled.div`
  & > span:not(:last-of-type) {
    padding-right: 0.28rem;
  }
`

const Line = styled.div`
  flex: 1;
  height: 1px;
  margin-left: 0.25rem;
  background-color: #dfdfdf;
`

const ProjectLinks = styled.div`
  ${flex};
  margin-top: 4.3rem;

  a {
    ${flex};
    font-size: 1.33rem;

    span {
      margin-right: 0.35rem;
    }

    &:not(:last-of-type) {
      margin-right: 3.2rem;
    }
  }
`
