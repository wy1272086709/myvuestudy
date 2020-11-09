<template>
<div>
	<div>{{name }}</div>
	<button @click="changeName">修改name值</button>
	<Child></Child>
</div>
</template>

<script>
	import Child from './child';
	export default {
		name: 'top',
		components: {
			Child
		},
		data() {
			return {
				name: 'wangyu'
			};
		},
		// 返回可以被子对象引用的实例
		provide() {
			return {
				name: this.name
			}
		},
		methods: {
			changeName() {
				this.name = 'heheheheheh';
			}
		},
		mounted() {

		},
		crated() {
			
		}
	}

</script>


<style>
	


</style>