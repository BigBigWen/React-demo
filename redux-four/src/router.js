import React from 'react'
import {Route, Router, Link, Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Page1 from './container/Page1'
import Page2 from './container/Page2'
import Page3 from './container/Page3'
// import HooksTest from './container/Hooks'

const history = createBrowserHistory()
const Links = () => (
  <nav>
    <Link to='/'>重定向</Link>
    <Link to='/home'>Home</Link>
    <Link to='/page1'>Page1</Link>
    <Link to='/page2'>Page2</Link>
    <Link to='/page3'>Page3</Link>
    {/* <Link to='/hooks'>HooksTest</Link> */}
  </nav>
)

class RouterCom extends React.Component {
  render () {
    const loggedIn = true
    return (
      <Router history={history}>
        <div>
          <Links />
          <Route exact path='/' render={() => loggedIn ? <Redirect to='/home' /> : (<h1>重定向</h1>)} />
          <Route exact path='/home' render={() => <h1>Home</h1>} />
          <Route exact path='/page1' component={Page1} />
          <Route exact path='/page2' component={Page2} />
          <Route exact path='/page3' component={Page3} />
          {/* <Route exact path='/hooks' component={() => HooksTest()} /> */}
        </div>
      </Router>
    )
  }
}

export default RouterCom
