//只挂载激活app，entry-client.js
import createApp from "./main.js"

//创建实例
const {app,router}=createApp()
router.onReady(()=>{
	app.$mount("#app")
})