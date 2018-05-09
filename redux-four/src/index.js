import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import RouterCom from './router'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<RouterCom />, document.getElementById('root'))
registerServiceWorker()
