<template>
    <div>
        <h1>Padre Numeros</h1>

        <h2 style="color: red">La suma es {{suma}}</h2>

        <button @click="aleat">Nuevo numero</button>

        <div v-for="num in numeros" :key="num">
            <HijoNumero :num="num" v-on:sumarBotonPadre="sumarBotonPadre"/>
        </div>
    </div>
</template>

<script>
import HijoNumero from './HijoNumero';

export default {
    name: "PadreNumeros" ,
    components : {
        HijoNumero
    },
    methods : {
        aleat() {
            var aleat = parseInt(Math.random()*11);
            this.numeros.push(aleat);
        },
        sumarBotonPadre(num) {
            this.suma += num;
        }
    },
    data() {
        return{
            numeros : [8, 2],
            suma : 0
        }
    }
}
</script>