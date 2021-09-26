import React from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"

import Heart from "../../images/heart.png"

const Cursor = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [hide, setHide] = React.useState(false)
  const [click, setClick] = React.useState(false)
  const [linkHover, setLinkHover] = React.useState(false)

  const location = useLocation()

  const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY })

  const mouseEnter = () => setHide(false)
  const mouseLeave = () => setHide(true)

  const mouseDown = () => setClick(true)
  const mouseUp = () => setClick(false)

  const mouseOver = () => setLinkHover(true)
  const mouseOff = () => setLinkHover(false)

  const addLinkHover = () => {
    document.body.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseover", mouseOver)
      link.addEventListener("mouseout", mouseOff)
    })
  }

  const addListeners = React.useCallback(() => {
    document.body.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseenter", mouseEnter)
    document.body.addEventListener("mouseleave", mouseLeave)
    document.body.addEventListener("mousedown", mouseDown)
    document.body.addEventListener("mouseup", mouseUp)
  }, [])

  const removeListeners = React.useCallback(() => {
    document.body.removeEventListener("mousemove", updatePosition)
    document.body.removeEventListener("mouseenter", mouseEnter)
    document.body.removeEventListener("mouseleave", mouseLeave)
    document.body.removeEventListener("mousedown", mouseDown)
    document.body.removeEventListener("mouseup", mouseUp)
  })

  React.useEffect(() => {
    addListeners()
    addLinkHover()

    return () => removeListeners()
  }, [location])

  return (
    <CursorContainer
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      hide={hide}
      click={click}
      linkHover={linkHover}
    >
      <img src={Heart} alt="cursor heart" />
    </CursorContainer>
  )
}

export default Cursor

const CursorContainer = styled.div`
  z-index: 3;
  position: fixed;
  height: 45px;
  width: 45px;
  pointer-events: none;
  user-select: none;
  opacity: ${({ hide, linkHover }) => {
    switch (true) {
      case hide:
        return 0
      case linkHover:
        return 0.2
      default:
        return 1
    }
  }};
  transform: ${({ click, linkHover }) => {
    switch (true) {
      case click:
        return "translate(-50%, -50%) scale(0.88)"
      case linkHover:
        return "translate(-50%, -50%) scale(1.65)"
      default:
        return "translate(-50%, -50%) scale(1)"
    }
  }};
  transition: all ease 0.15s;
  transition-property: opacity, transform;

  img {
    height: 100%;
    width: 100%;
  }
`
