export const actionTypes = {
  SIDEMENU_OPEN_MENU: 'UI/SIDEMENU_OPEN_MENU',
  SIDEMENU_CLOSE_MENU: 'UI/SIDEMENU_CLOSE_MENU',
  NOTIFICATION_PUT_MESSAGE: 'UI/NOTIFICATION_PUT_MESSAGE',
  NOTIFICATION_READ_MESSAGE: 'UI/NOTIFICATION_READ_MESSAGE',
  SUPPORT_FORM_GO_TO_NEXT_STEP: 'UI/SUPPORT_FORM_GO_TO_NEXT_STEP',
  SUPPORT_FORM_BACK_TO_PREVIOUS_STEP: 'UI/SUPPORT_FORM_BACK_TO_PREVIOUS_STEP'
}

const defaultInitialState = {
  sidemenuIsOpen: true,
  notifications: [],
  supportFormCurrentStep: 0
}

export const reducer = (state = defaultInitialState, action) => {
  const msg = `msg-${Math.random()
    .toString(36)
    .substring(6)}`
  switch (action.type) {
    case actionTypes.SIDEMENU_OPEN_MENU:
      return Object.assign({}, state, {
        sidemenuIsOpen: true,
        notifications: [msg].concat(state.notifications)
      })
    case actionTypes.SIDEMENU_CLOSE_MENU:
      return Object.assign({}, state, {
        sidemenuIsOpen: false
      })
    case actionTypes.NOTIFICATION_PUT_MESSAGE:
      return Object.assign({}, state, {
        notifications: [msg].concat(state.notifications)
      })
    case actionTypes.NOTIFICATION_READ_MESSAGE:
      return Object.assign({}, state, {
        notifications: state.notifications.slice(1)
      })

    case actionTypes.SUPPORT_FORM_GO_TO_NEXT_STEP:
      return Object.assign({}, state, {
        supportFormCurrentStep: state.supportFormCurrentStep + 1
      })
    case actionTypes.SUPPORT_FORM_BACK_TO_PREVIOUS_STEP:
      return Object.assign({}, state, {
        supportFormCurrentStep: state.supportFormCurrentStep - 1
      })
    default:
      return state
  }
}

export const sidemenuOpenMenu = () => {
  return { type: actionTypes.SIDEMENU_OPEN_MENU }
}
export const sidemenuCloseMenu = () => {
  return { type: actionTypes.SIDEMENU_CLOSE_MENU }
}
export const notificationPutMessage = () => {
  return { type: actionTypes.NOTIFICATION_PUT_MESSAGE }
}
export const notificationReadMessage = () => {
  return { type: actionTypes.NOTIFICATION_READ_MESSAGE }
}

export const supportFormGoToNextStep = () => {
  return { type: actionTypes.SUPPORT_FORM_GO_TO_NEXT_STEP }
}
export const supportFormBackToPreviousStep = () => {
  return { type: actionTypes.SUPPORT_FORM_BACK_TO_PREVIOUS_STEP }
}
