import * as React from "react"
import styled from "styled-components"

import { usePopupContext } from "../PopupProvider"
import { PROJECT_DATA } from "../project_data"

import ButtonLink from "../components/Button"

const NotFoundPage = () => {
  const { changeProject } = usePopupContext()

  const projectLength = PROJECT_DATA.projects.length - 1
  const randomProject = Math.floor(Math.random() * (projectLength - 0 + 1) + 0)

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
            <ProjectItem onClick={() => changeProject(randomProject)} />
          </Project>
          <p>Or you can head home–</p>
          <ButtonLink internalLink url={"/"} text={"Back to homepage"} />
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
`
