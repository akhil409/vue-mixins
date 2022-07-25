<template>
    <div class="clickCounter">
          <h1>Hi from ClickCounter</h1>
          <button @click="incremented">Clicked {{count}} times</button>
          <button @click="decremented">Clicked {{count}} times</button>
    </div>
    <!-- Reference: https://www.youtube.com/watch?v=LyG_l5UoeHI -->
</template>

<script>
import MixinsMethods from '../mixins/MixinsMethods'

export default {
       name:'ClickCounter',
       mixins:[MixinsMethods],
       data(){
        return{
            count:0,
        }
       },   
         
}
</script>

<style>

</style>