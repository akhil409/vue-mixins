<template>
      <div class="hoverCounter">
             <h1>Hi from Hover Counter</h1>
             <h2 @mouseover="incremented">MouseOver {{count}} times</h2>
      </div>
</template>

<script>
import MixinsMethods from '../mixins/MixinsMethods'

export default {
         name:'HoverCounter',
         mixins:[MixinsMethods],
         data(){
              return{
                 count:0,
             }
          }, 
         
}
</script>

<style scoped>

</style>>
