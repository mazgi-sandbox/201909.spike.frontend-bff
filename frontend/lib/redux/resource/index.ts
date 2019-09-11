export const actionTypes = {
  USERS_SUCCESS: 'RESOURCE/USERS_SUCCESS',
  CREATE_USER_SUCCESS: 'RESOURCE/CREATE_USER_SUCCESS',
}

const defaultInitialState = {
  users: [],
}

export const reducer = (state = defaultInitialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      }
    case actionTypes.USERS_SUCCESS:
      return {
        ...state,
        createUser: action.createUser,
      }
    default:
      return state
  }
}
