import Vue from 'vue'
import router from './router/index.js';
import App from './App.vue'
import TestSlot from './/components/TestSlot.vue';
Vue.config.productionTip = false
require('./mock')
Vue.component('TestSlot', TestSlot);
const name = 'wangyuooo';
const age  = 31;

function test() {
	return 'test from here!';
}

let s = `I from China ,my name is ${name}, my age is ${age}, ${test()}`;
console.log('s', s);

new Vue({
router,
el:'#app',
render: h=> h(App)
});
