<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive><router-view/></keep-alive>
    <p>1</p>
        <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>

    <router-view/>
    <!-- <dropdown></dropdown> -->
    <!-- <DropDown></DropDown> -->
    <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script>
import DropDown from './components/DropDown'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DropDown
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
DropDown{
  display: absolute;
  top: 500px;
}
</style>
