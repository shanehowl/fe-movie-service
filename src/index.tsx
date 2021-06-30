import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

// Pages
import Home from './pages/home'

// Styles
import './styles/index.less'

// Utilities
import { ReduxProvider } from './utilities/redux/redux'
import { setup } from './services'

setup()
ReactDOM.render(
  <ReduxProvider>
    <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
