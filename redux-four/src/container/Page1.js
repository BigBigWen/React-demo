import React from 'react'
import Component from './component'
import HooksTest from './Hooks'
export default class Page1 extends React.Component {
  render () {
    return (
      <div>Page1
        <HooksTest />
        {/* {
          Component({a: 1})
        }
        <Component /> */}
      </div>
    )
  }
}
