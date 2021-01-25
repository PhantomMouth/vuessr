//创建vue实例,相当于以前的main.js
import Vue from "vue"
import App from "./App.vue"
import createRouter from "./router/index.js"
import createStore from "./store/index.js"

//导出工厂函数，每次客户端请求，生成互不干涉的vue实例，保证不同用户互不干扰
export default function createApp(){  
	// 创造实例
	const router=createRouter()
	const store=createStore()
	const app=new Vue({
		router,
		store,
		render:h=>h(App)
	})
	return {app,router,store};
	//不挂载，因为没地方挂，挂载要发生在浏览器上
}