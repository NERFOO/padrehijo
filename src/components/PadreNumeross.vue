<template>
    <div>
        <h1>Padre numeros</h1>

        <h2 style="color:red">La suma es {{suma}}</h2>

        <button @click="aleat">Nuevo numero</button>

        <div v-for="num in numeros" :key="num">
            <HijoNumeroo :num="num" v-on:valorBotonPadre="valorBotonPadre"/>
        </div>
    </div>
</template>

<script>
import HijoNumeroo from './HijoNumeroo.vue';
export default {
    name : "PadreNumeross" ,
    components : {
        HijoNumeroo
    },
    methods : {
        aleat() {
            var aleat = parseInt(Math.random()*11);
            console.log(aleat);
            this.numeros.push(aleat);
        },
        valorBotonPadre(num) {
            this.suma += num;
        }
    },
    data() {
        return {
            numeros : [11, 7] ,
            suma : 0
        }
    }

}
</script>

<style>

</style>