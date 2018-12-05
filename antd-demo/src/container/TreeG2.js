import { Chart, Facet, View, Tooltip, Legend, Axis, StackBar, FacetView, Coord } from 'viser-react'
import * as React from 'react'
const DataSet = require('@antv/data-set')
const { DataView } = DataSet

const data = [
  {gender: '女', count: 1, 'class': '计费进线', grade: '回路1'},
  {gender: '女', count: 1, 'class': '计费进线', grade: '回路2'},
  {gender: '女', count: 1, 'class': '计费进线', grade: '回路3'},
  {gender: '女', count: 1, 'class': '计费进线', grade: '回路4'},
  {gender: '女', count: 1, 'class': '计费进线', grade: '回路5'},
  {gender: '女', count: 1, 'class': '计费进线', grade: '回路6'}
]

const views = (view, facet) => {
  const data = facet.data
  const dv = new DataView()
  dv.source(data).transform({
    type: 'percent',
    field: 'count',
    dimension: 'grade',
    as: 'percent'
  })

  return {
    data: dv,
    scale: {
      dataKey: 'percent',
      formatter: () => '回路'
    },
    series: {
      quickType: 'stackBar',
      position: 'percent',
      color: 'grade'
    }
  }
}

export default class App extends React.Component {
  render () {
    return (
      <Chart forceFit height={400} data={data} padding={[60, 90, 80, 80]}>
        <Tooltip showTitle={false} />
        <Coord type='theta' />
        <Legend position='top-center' title={{name: '计费进线'}} />
        <Facet type='tree' fields={['grade']} line={{ stroke: '#00a3d7' }} lineSmooth views={views} />
      </Chart>
    )
  }
}
