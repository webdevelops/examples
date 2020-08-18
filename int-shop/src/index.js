import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware/* , ConnectedRouter */ } from 'connected-react-router'
import { HashRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from 'reducers'
import routes from 'routes'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={history}>
      {routes}
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
