<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  -->
  <!--
    <TstSlot>
    -->
      <!--
      <template>
        <p>不开心</p>
      </template>
    -->
      <!--v-slot:XX(XX 为插槽名字) -->
      <!--
      <template v-slot:myslot1="">
        <p>具名插槽实例...</p>
      </template>
      调用插槽的时候,从作用域  -->
      <!-- 这种写法，表示是默认插槽，同时是作用域插槽 -->
      <!--
      <template v-slot="wts">
        <p>{{ wts.user.firstName }}</p>
      </template>
      这里接受插槽上的属性值的对象 -->
      <!--
      <template v-slot:myslot2="scope">
        <p>作用域插槽...{{scope.user.lastName}}</p>
      </template>
    </TestSlot>
  -->
    <router-view></router-view>
      <ul>
        <li>
          <router-link to="/hello1">实例1</router-link>
        </li>
        <li>
          <router-link to="/hello2">实例2</router-link>
        </li>
        <li>
          <router-link to="/hello3">实例3</router-link>
        </li>
      </ul>
    <p>Hello word!</p>
  </div>
</template>

<script>
  /**
import HelloWorld from './components/HelloWorld.vue'
**/
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
