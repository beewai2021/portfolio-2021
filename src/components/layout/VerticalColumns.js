import React from "react"
import styled from "styled-components"

const VerticalColumns = () => {
  return (
    <ColumnsContainer>
      <ColumnsWrapper>
        <Columns>
          <Column />
          <Column />
          <Column />
          <Column />
        </Columns>
      </ColumnsWrapper>
    </ColumnsContainer>
  )
}

export default VerticalColumns

const ColumnsContainer = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 1.3rem;
`

const ColumnsWrapper = styled.div`
  height: 100%;
  max-width: var(--maxWidth-xl);
  margin: 0 auto;
`

const Columns = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: var(--verticalBorders-xl);
  border-left: 1px solid var(--borderColor);
`

const Column = styled.div`
  width: calc(100% / 4);
  pointer-events: none;
  border-right: 1px solid var(--borderColor);
`
