//渲染首屏，entry-server.js
import createApp from "./main.js"
export default context=>{
	 // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
	// 以便服务器能够等待所有的内容在渲染前，
	// 就已经准备就绪。
	return new Promise((resolve,reject)=>{
		const {app,router}=createApp()
		//进入首屏，设置服务器端router的位置
		router.push(context.url)
		// 等到 router 将可能的异步组件和钩子函数解析完
		router.onReady(()=>{
			resolve(app);
		},reject)
	})
}