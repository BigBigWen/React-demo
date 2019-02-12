import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import './style.css'
import App from './App'
import history from './lib/histropy'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App history={history} />, document.getElementById('root'))
registerServiceWorker()
