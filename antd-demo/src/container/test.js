import React from 'react'
import G6 from '@antv/g6'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    const data = {
      'nodes': [
        {
          'shape': 'customNode',
          'id': 'node1',
          'x': 50,
          'y': 100,
          style: {
            fill: '#fff',
            stroke: '#ccc'
          }
        }
      ]
    }

    G6.registerNode('customNode', {
      draw (item) {
        const group = item.getGraphicGroup()
        const model = item.getModel()
        group.addShape('text', {
          attrs: {
            x: 100,
            y: 100,
            fill: '#333',
            text: '回路名称'
          }
        })
        // group.addShape('circle', {
        //   attrs: {
        //     x: 50,
        //     y: 30,
        //     r: 4,
        //     fill: '#fff',
        //     stroke: 'red'
        //   }
        // })
        // group.addShape('line', {
        //   attrs: {
        //     x1: 50,
        //     y1: 34,
        //     x2: 50,
        //     y2: 44,
        //     stroke: 'red'
        //   }
        // })
        // group.addShape('line', {
        //   attrs: {
        //     x1: 46,
        //     y1: 50,
        //     x2: 54,
        //     y2: 55,
        //     stroke: 'red'
        //   }
        // })
        // group.addShape('line', {
        //   attrs: {
        //     x1: 54,
        //     y1: 50,
        //     x2: 46,
        //     y2: 55,
        //     stroke: 'red'
        //   }
        // })
        // group.addShape('rect', {
        //   attrs: {
        //     x: 46,
        //     y: 60,
        //     width: 8,
        //     height: 30,
        //     stroke: 'red',
        //     fill: 'red'
        //   }
        // })
        // group.addShape('line', {
        //   attrs: {
        //     x1: 46,
        //     y1: 95,
        //     x2: 54,
        //     y2: 100,
        //     stroke: 'red'
        //   }
        // })
        // group.addShape('line', {
        //   attrs: {
        //     x1: 54,
        //     y1: 95,
        //     x2: 46,
        //     y2: 100,
        //     stroke: 'red'
        //   }
        // })
        // group.addShape('line', {
        //   attrs: {
        //     x1: 50,
        //     y1: 105,
        //     x2: 50,
        //     y2: 125,
        //     stroke: 'red'
        //   }
        // })
        group.addShape('image', {
          attrs: {
            x: 150 + 200,
            y: 150,
            img: 'https://kf-prod.oss-cn-beijing.aliyuncs.com/antv-g6/imgs/16.png'
          }
        })
        // group.addShape('path', {
        //   attrs: {
        //     path: 'M46,130 M50,135 M54,130 M135,150 L46,130 Z',
        //     stroke: 'red'
        //   }
        // })
        return group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: 100,
            height: 200,
            stroke: '#ccc'
          }
        })
      }
    })

    const graph = new G6.Graph({
      container: 'mountNode',  // dom 容器 或 容器ID
      width: 500,              // 画布宽
      height: 500             // 画布高
    })
    graph.read(data)
  }

  render () {
    return (
      <div id='mountNode' />
    )
  }
}
