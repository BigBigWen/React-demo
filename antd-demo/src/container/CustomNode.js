import React from 'react'
import G6 from '@antv/g6'

const result = [
  {name: '回路1',
    style: {
      fill: 'r(0.5,0.4,0.3) 0:#fcc  0.5:#ffffff',
      radius: 60
    }},
  {name: '回路2'},
  {name: '回路3'},
  {name: '回路4'}
]

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    const data = {
      'nodes': result.map((node, index) => ({
        ...node,
        'shape': 'customNode',
        id: index,
        'y': 100,
        'x': 50 + (index * 115)
      })),
      edges: [{
        id: 'edge1',
        target: '3',
        source: '0',
        targetAnchor: 1 // 强制指定目标节点的连接点是索引为 1 的锚点
      }]
    }

    G6.registerNode('customNode', {
      anchor: [
        [1, 0.04],
        [0, 0.04]
      ],
      draw (item) {
        const group = item.getGraphicGroup()
        const model = item.getModel();
        ['回', '路', '名', '称'].map((item, index) => {
          group.addShape('text', {
            attrs: {
              x: 100,
              y: 30 + 20 * index,
              fill: '#333',
              text: item
            }
          })
        })
        group.addShape('rect', {
          attrs: {
            x: 32,
            y: -20,
            width: 50,
            height: 190,
            fillOpacity: 0.5,
            ...model.style
          }
        })
        group.addShape('image', {
          attrs: {
            x: 0,
            y: 0,
            img: 'https://kf-prod.oss-cn-beijing.aliyuncs.com/antv-g6/imgs/circuit.png'
          }
        })
        return group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: 115,
            height: 150
          }
        })
      }
    })

    const graph = new G6.Graph({
      container: 'mountNode', // dom 容器 或 容器ID
      width: 800, // 画布宽
      height: 500 // 画布高
    })
    graph.read(data)
  }

  render () {
    return (
      <div id='mountNode' >
        <canvas id='canvas' />
      </div>
    )
  }
}
