<template>
       <div>
            <h2>Increment</h2>
            <button @click="a++">Increment A</button>
            <p>{{a}}</p>
            <h2>Decrement</h2>
            <button @click="b++">Increment B</button>
            <p>{{b}}</p>
            <hr>
            <h1>Computed Property Used</h1>
            <h2>A + Age = {{computedIncre}}</h2>
            <h2>B + Age = {{computedDecre}}</h2>
       </div>
</template>

<script>
export default {
        name:'ComputedProperty',
        data(){
            return{
                age:27,
                a:0,
                b:0,

            }
        },
        computed:{
            computedIncre(){
                return this.a + this.age
            },
            computedDecre(){
                return this.b + this.age
            }
        }

}
</script>

<style>

</style>