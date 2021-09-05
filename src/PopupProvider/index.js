import React from "react"

export const PROJECT_CONSTANTS = {
  altair: 0,
  pocketTrader: 1,
  gameChanger: 2,
  miqs: 3,
}

const initialState = {
  currentProject: 0,
  popupOpen: false,
  changeProject: () => {},
  togglePopup: () => {},
}

const popupReducer = (state, action) => {
  switch (action.type) {
    // open popup, change project
    case "CHANGE_PROJECT":
      return {
        currentProject: action.payload,
        popUpOpen: !state.popUpOpen ? true : false,
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

  const togglePopup = () => {
    dispatch({
      type: "TOGGLE_POPUP",
    })
  }

  const value = {
    currentProject: state.currentProject,
    popupOpen: state.popUpOpen,
    changeProject,
    togglePopup,
  }

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
}

export default PopupProvider

export { usePopupContext }
