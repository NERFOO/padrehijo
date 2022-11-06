<template>
    <div>
        <h1 style="color:blue">Numero hijo {{num}}</h1>
        <button @click="sumarBoton">Sumar {{num}}</button>
    </div>
</template>

<script>
export default {
    name: "HijoNumero" ,
    props : [ "num" ],
    methods : {
        sumarBoton() {
            this.$emit("sumarBotonPadre", this.num);
        }
    },
    mounted() {
        console.log(this.num);
    }
}
</script>

<style>

</style>