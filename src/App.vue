<template>
  <div id="app">
       <ClickCounter />
       <HoverCounter />
       <InactiveUsers />
       <ActiveUsers />
       <h1>Search Bar</h1>
       <SearchBar />
       <h1>Computed Property</h1>
       <ComputedProperty />
  </div>
  <!-- Reference:- https://www.youtube.com/watch?v=LyG_l5UoeHI -->
</template>

<script>
import ClickCounter from './components/ClickCounter.vue';
import HoverCounter from './components/HoverCounter.vue';
import InactiveUsers from './components/InactiveUsers.vue';
import ActiveUsers from './components/ActiveUsers.vue';
import SearchBar from './components/SearchBar.vue';
import ComputedProperty from './components/ComputedProperty.vue';


export default {
  name: 'App',
  components: {
    ClickCounter,
    HoverCounter,
    InactiveUsers,
    ActiveUsers,
    SearchBar,
    ComputedProperty
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
