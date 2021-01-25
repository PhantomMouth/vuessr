<template>
	<div>
		首页
		<p>{{data}}</p>
		<ul>
			<li v-for="item in data2" :key="item.id">
				<span>{{item.text}}</span>
			</li>
		</ul>
		
	</div>
</template>

<script>
	export default {
		// mounted() {
		// 	this.$store.commit("pho")
		// },
		  asyncData ({ store}) {
		    // 触发 action 后，会返回 Promise
		    return store.commit("pho")
		  },
		computed:{
			data(){
				return this.$store.state.data
			},
			data2(){
				return this.$store.state.aysnc
			}
		}
	}
</script>

<style scoped>

</style>