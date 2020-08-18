import { createStore, applyMiddleware } from 'redux'
import {createBrowserHistory} from 'history'
import createRootReducer from 'reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()
const middlewares = [
  thunk,
  routerMiddleware(history)
]
export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)