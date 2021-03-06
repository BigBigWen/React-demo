import { Graph, Node, Edge, registerNode, registerEdge, Layouts } from 'viser-graph-react'
import * as React from 'react'
const data = {
  'name': '计费进线',
  'children': [
  {name: '回路一', fill: 'ccf'},
  {name: '回路二'},
  {name: '回路三'},
  {name: '回路四'},
  {name: '回路五'}
  ]
}

registerNode('treeNode', {
  anchor: [[0, 0.5], [1, 0.5]]
})

registerEdge('smooth', {
  getPath: function getPath (item) {
    var points = item.getPoints()
    var start = points[0]
    var end = points[points.length - 1]
    var hgap = Math.abs(end.x - start.x)
    if (end.x > start.x) {
      return [['M', start.x, start.y], ['C', start.x + hgap / 4, start.y, end.x - hgap / 2, end.y, end.x, end.y]]
    }
    return [['M', start.x, start.y], ['C', start.x - hgap / 4, start.y, end.x + hgap / 2, end.y, end.x, end.y]]
  }
})

var layout = new Layouts.CompactBoxTree({
  // direction: 'LR', // 方向（LR/RL/H/TB/BT/V）
  getHGap: function getHGap () /* d */ {
    // 横向间距
    return 100
  },
  getVGap: function getVGap () /* d */ {
    // 竖向间距
    return 50
  }
})

const graph = {
  container: 'mount',
  width: 500,
  height: 500,
  fitView: 'autoZoom',
  fitViewPadding: true,
  animate: true,
  type: 'tree',
  layout: layout,
  data: {
    roots: [data]
  },
  onAfterchange: function (ev, graph) {
    console.log('onAfterchange')
    graph.getNodes().forEach(function (node) {
      var model = node.getModel()
      var label = node.getLabel()
      var keyShape = node.getKeyShape()
      var children = node.getChildren()
      var parent = node.getParent()
      var box = keyShape.getBBox()
      var labelBox = label.getBBox()
      var dx = (box.maxX - box.minX + labelBox.maxX - labelBox.minX) / 2 + 8
      var dy = 0
      if (children.length != 0) {
        dx = -dx
      }
      label.translate(dx, dy)
    })
    graph.draw()
  }
}

const node = {
  shape: 'treeNode',
  size: 8,
  label: function (obj) {
    return {
      text: obj.name,
      fill: obj.fill || '#fcc'
    }
  }
}
const edge = {
  shape: 'smooth'
}
export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Graph {...graph}>
          <Node {...node} />
          <Edge {...edge} />
        </Graph>
      </div>
    )
  }
}
