import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/Home.vue"
import about from "../views/About.vue"

Vue.use(VueRouter);

// 为什么不导入一个router实例？
// 因为防止污染,客户端渲染时,是在客户端上自动生成实例,不会出现交叉
// 但是服务端渲染时,如果只有一个实例,会导致不同用户的污染
// 所以每次请求都需要重新生成router实例
export default function createRouter(){  
	return new VueRouter({  //创建工厂函数
		mode:"history",
		routes:[
			{path:"/",component:home},
			{path:"/about",component:about}
		]
	})
}