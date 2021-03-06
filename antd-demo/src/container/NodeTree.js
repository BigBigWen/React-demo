// import React from 'react'
// import { NodeTree } from 'hermes-react'

// const treeStyle = {
//   rootSize: {
//     width: 120,
//     height: 40
//   },
//   childSize: {
//     width: 120,
//     height: 40
//   },
//   divid: {
//     parent: 60,
//     brother: 30
//   }
// }

// function createData () {
//   let length = Number.parseInt(Math.random() * 5, 10) + 1
//   let arr = []
//   let percent = 0
//   let query = 0

//   for (let i = 0; i < length; i++) {
//     query = Number.parseInt(Math.random() * 100, 10)
//     percent = Number.parseInt(Math.random() * 100, 10)

//     arr.push({
//       query: query,
//       text: `这是结点${query}`,
//       percent: `${percent}%`
//     })
//   }

//   return arr
// }

// /*
// ** 可以通过添加defaultPath属性来添加NodeTree的初始路径，数组顺序为树的层级顺序，值为在该层的节点顺序。
// ** 如果defaultPath中的路径在后端提供的数据中无法找到，则停止渲染在中断路径。所以你需要确认好后端的数据与路径是否匹配。
// */

// const Content = () => (
//   <div id='container' style={{width: 800, height: 600, margin: '0 auto'}}>
//     <NodeTree
//       {...treeStyle}
//       parentId='container'
//       renderNode={obj => obj.text}
//       queryKeys={['query']}
//       defaultPath={[0, 0, 0]}
//       url='http://test.com'
//       onLoadData={(obj) => {
//         if (obj === undefined) {
//           /*
//             拉取数据的回调会在控件初始化的时候触发一次，用来拿到根结点的信息, 我们可以在这里对根结点进行特殊处理
//           */
//           return new Promise((resolve) => {
//             let data = [{
//               query: 0,
//               text: '开始',
//               percent: '100%'
//             }]
//             setTimeout(() => {
//               resolve(data)
//             }, 100)
//           })
//         }
//         /*
//           我们可以从这个回调中异步的获取数据，函数的参数就是我们点击结点的数据信息，可以通过配置queryKeys拿到后台所需要的query值
//           例如
//           let query = '';
//           this.props.queryKeys.forEach((item) => {
//             query += `${item}=${obj[item]}`;
//           });

//           let url = `${this.props.url}?${query}`
//           return new Promise(ajax.get(url).done((d) => {resolve(d)}));
//         */
//         return new Promise((resolve) => {
//           let data = createData()
//           setTimeout(() => {
//             resolve(data)
//           }, 100)
//         })
//       }}
//     />
//   </div>
// )
// export default Content
