<template>
	<div>
		<p>Hello word33333!</p>
	</div>
</template>

<script>
	import http from '../utils/http.js'
	export default {
		async mounted() {
			const url = '/demos';
			const resp = await http.request(url, {}, 'get');
			if(resp.status == 200) {
				console.log('data', resp.data.data);
			}
			console.log('resp', resp);
		}
	}
</script>


<style>
	
</style>