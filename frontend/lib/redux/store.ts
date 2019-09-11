import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as uiReducer } from './ui'
import { reducer as formReducer } from 'redux-form'
import { reducer as resourceReducer } from './resource'

export const initializeStore = () => {
  const rootReducer = combineReducers({
    ui: uiReducer,
    form: formReducer,
    resource: resourceReducer,
  })

  return createStore(rootReducer, composeWithDevTools(applyMiddleware()))
}
