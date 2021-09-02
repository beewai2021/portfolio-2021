import React from "react"
import styled, { css } from "styled-components"

const ProjectPopup = ({ openPopup, togglePopup }) => {
  return (
    openPopup && (
      <PopupContainer>
        <Popup>
          <PopupWrapper>
            <CloseButton onClick={togglePopup}>
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
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </CloseButton>
            <Projects>
              <Project>
                <ProjectItem />
              </Project>
              <Project>
                <ProjectItem />
              </Project>
              <Project>
                <ProjectItem />
              </Project>
            </Projects>
            <ProjectDescription>
              <h1>Project Name</h1>
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
              </Company>
              <Date>
                <span>2020</span>
                <span>·</span>
                <span>3 MONTH PROJECT</span>
                <Line />
              </Date>
              <ProjectLinks>
                <a href="">
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
                <a href="">
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
              </ProjectLinks>
              <p>
                Sosum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </ProjectDescription>
          </PopupWrapper>
        </Popup>
      </PopupContainer>
    )
  )
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

const Popup = styled.section`
  position: relative;
  height: 93%;
  width: 96.5%;
  max-width: var(--maxWidth-xl);
  margin: 0 auto;
  padding: 0 7.5rem;
  overflow-y: scroll;
  border-radius: 22px;
  background-color: white;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`

const PopupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5.5rem;
  padding: 6.7rem 0;
`

const CloseButton = styled.div`
  position: absolute;
  top: 0.36rem;
  right: 0.36rem;

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 5.5rem;
    stroke: darkgray;
  }
`

const Projects = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1.75rem;
  }
`

const Project = styled.div`
  height: calc(var(--verticalBorders-xl) / var(--projectAspectRatio));
`

const ProjectItem = styled.div`
  height: 100%;
  border-radius: 6px;
  border: 1px solid black;
`

const ProjectDescription = styled.aside`
  margin-top: 4.2rem;

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
