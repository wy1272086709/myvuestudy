<template>
	<div>
		<p>开心</p>
		<!--
		<slot></slot>
	-->
		<slot name="myslot1"></slot>
		<!-- 在插槽上绑定属性 -->
		<slot :user="user" name="myslot2"></slot>
		<slot :user="user"></slot>
	</div>
</template>

<script>
let myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
export default {
	data() {
		return {
			user: {
				firstName: '汪',
				lastName: '毓',
			}
		};
	},
	methods: {
		hello() {
			// 这里的优先级比混入的方法的优先级要高一点...
			console.log('hello!...');
		},
	},
	props: {
		name: {
			type: String,
			default: '',
		},
		age: {
			type: Number,
			default: 0
		}
	},
	mixins: [ myMixin ]
}
</script>
<style>
	
</style>