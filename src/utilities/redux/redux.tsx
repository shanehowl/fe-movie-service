import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import reducers from '../../redux/reducers'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promise, thunk))(createStore)

export const store = createStoreWithMiddleware(reducers)

export const ReduxProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>
}
