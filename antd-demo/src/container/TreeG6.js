import { Graph, Zoom } from 'viser-graph-react'
import * as React from 'react'

const data = {
  roots: [{
    label: '计费进线',
    id: 1,
    size: 80,
    shape: 'circle',
    style: {
      fill: '#fcc'
    },
    children: [{
      label: '回路1',
      fill: 'ccf'
    },
    {
      label: '回路2'
    },
    {
      label: '回路3'
    },
    {
      label: '回路4'
    },
    {
      label: '回路5'
    }
    ]
  }]
}

const graph = {
  width: 500,
  height: 500,
  fitView: 'cc',
  fitViewPadding: true,
  animate: true,
  type: 'tree',
  data,
  onClick: function (ev, graph) {
    alert(ev, graph)
  }
}
const zoom = {
  min: 1,
  max: 10
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Graph {...graph}>
          <Zoom {...zoom} />
        </Graph>
      </div>
    )
  }
}
