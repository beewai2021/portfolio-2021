import React from "react"
import { PROJECT_DATA } from "../project_data"

const initialState = {
  currentProject: 0,
  popupOpen: false,
  changeProject: () => {},
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
    //s switch to next project
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

  const nextProject = () => {
    dispatch({
      type: "NEXT_PROJECT",
    })
  }

  const togglePopup = () => {
    dispatch({
      type: "TOGGLE_POPUP",
    })
  }

  const value = {
    currentProject: state.currentProject,
    popupOpen: state.popUpOpen,
    changeProject,
    nextProject,
    togglePopup,
  }

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
}

export default PopupProvider

export { usePopupContext }
