import React from "react"
import { throttle } from "throttle-debounce"

import { PROJECT_DATA } from "../project_data"

const initialState = {
  currentProject: 0,
  popupOpen: false,
  changeProject: () => {},
  previousProject: () => {},
  nextProject: () => {},
  togglePopup: () => {},
}

const popupReducer = (state, action) => {
  switch (action.type) {
    // open popup, change project
    case "CHANGE_PROJECT":
      return {
        currentProject: action.payload,
        popUpOpen: !state.popUpOpen && true,
      }
    // switch to prev project
    case "PREV_PROJECT":
      return {
        ...state,
        currentProject:
          state.currentProject === 0
            ? PROJECT_DATA.projects.length - 1
            : state.currentProject - 1,
      }
    // switch to next project
    case "NEXT_PROJECT":
      return {
        ...state,
        currentProject:
          (state.currentProject + 1) % PROJECT_DATA.projects.length,
      }
    // open/close popup
    case "TOGGLE_POPUP":
      return {
        popupOpen: !state.popUpOpen,
      }
    default:
      return state
  }
}

const PopupContext = React.createContext(initialState)
const usePopupContext = () => React.useContext(PopupContext)

const PopupProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(popupReducer, initialState)

  const changeProject = (projectId) => {
    dispatch({
      type: "CHANGE_PROJECT",
      payload: projectId,
    })
  }

  const previousProject = throttle(270, () => {
    dispatch({
      type: "PREV_PROJECT",
    })
  })

  const nextProject = throttle(270, () => {
    dispatch({
      type: "NEXT_PROJECT",
    })
  })

  const togglePopup = () => {
    dispatch({
      type: "TOGGLE_POPUP",
    })
  }

  const value = {
    currentProject: state.currentProject,
    popupOpen: state.popUpOpen,
    changeProject,
    previousProject,
    nextProject,
    togglePopup,
  }

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
}

export default PopupProvider

export { usePopupContext }
