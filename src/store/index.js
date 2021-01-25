import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default function createStore(){
	return new Vuex.Store({
		state: {
			data:"这是测试",
			aysnc:[]
		},
		mutations: {
			pho(state){
				axios.post(
					"http://localhost:80/php/photo/photo.php",
				).then((res)=>{
					console.log(res.data)
					state.aysnc=res.data
				})
			}
		},
		
		actions: {},
		modules: {}
	})
};
