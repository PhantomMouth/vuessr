let express=require("express");
let Vue=require("vue")
let fs=require("fs")


// 创造实例
let server=express();
//创造渲染器
const { createBundleRenderer } = require("vue-server-renderer");
const serverBundle=require("../dist/vue-ssr-server-bundle.json");
const clientManifest=require("../dist/vue-ssr-client-manifest.json")

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync("../dist/we.html","utf-8"),
  clientManifest
});
server.use(express.static("../dist",{index:false}))
//创造请求
server.get("*",async (req,res)=>{
	try{
		const context={
			url:req.url,
			title:"sssr"
		}
		const html= await renderer.renderToString(context);
		res.send(html)
	}catch(error){
		res.status(500).send("404")
	}
})
//开启端口
server.listen(7777,()=>{
	 console.log('你可以访问:http://127.0.1:7777');  
})

