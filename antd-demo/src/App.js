import React, { Component } from 'react'
import {Router, Route, Link, Switch} from 'react-router'
import './App.css'
import BoredSelected from './container/BoredSelected'
import TreeG2 from './container/TreeG2'
// import NodeTree from './container/NodeTree'
import TreeG6 from './container/TreeG6'
import TextTree from './container/TextTree'
import CustomNode from './container/CustomNode'

// class App extends Component {
//   render () {
//     return (
//       <div className='App'>
//         {/* <BoredSelected /> */}
//         antd项目
//         <TreeG2 />
//         <div>---------------------------------------华丽分割线-------------------------------------</div>
//         {/* <NodeTree /> */}
//         <TreeG6 />
//         <div>---------------------------------------华丽分割线-------------------------------------</div>
//         <TextTree />
//         <div>---------------------------------------华丽分割线-------------------------------------</div>
//         <CustomNode />
//       </div>
//     )
//   }
// }

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={CustomNode} />
        <Route exact path='/bored-selected' component={BoredSelected} />
      </Switch>
    </Router>

  )
}

export default App
