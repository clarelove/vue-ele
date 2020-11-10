<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <dropdown></dropdown> -->
    <DropDown></DropDown>
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
</style>
