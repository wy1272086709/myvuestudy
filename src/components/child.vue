<template>
<!-- 这个属性，来自注入的属性 -->
<div>{{name}}</div>

</template>

<script>
	import http from '../utils/http.js';
	
	export default {
		data() {
			return {};
		},
		// 一个字符串数组,
		// 或者一个对象,
		inject: ['name'],
		mounted() {

		},
		crated() {

		}
	}

</script>


<style>
	


</style>