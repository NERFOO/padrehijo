<template>
    <div>
        <h1 style="color:blue">Numero hijo {{num}}</h1>
        <button @click="valorBoton">Sumar {{num}}</button>
    </div>
</template>

<script>
export default {
    name : "HijoNumeroo" ,
    props : [ "num" ],
    methods : {
        valorBoton() {
            this.$emit("valorBotonPadre", this.num);
        }
    }
}
</script>
