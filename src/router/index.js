import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello01 from '../pages/helloword01.vue';
import Hello02 from '../pages/helloword02.vue' ;
import Hello03 from '../pages/helloword03.vue' ;

Vue.use(VueRouter)

export default new VueRouter({
	routes: [ 
		{
			path: '/hello1',
			component: Hello01
		}, 
		{
			path: '/hello2',
			component: Hello02
		}, 
		{
			path: '/hello3',
			component: Hello03
		}
	]
});