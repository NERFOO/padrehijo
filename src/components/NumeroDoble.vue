<template>
    <div>
        <h1>Numero doble con parametro</h1>
        <h2 v-if="mensaje" style="color:red">{{mensaje}}</h2>
        <div v-else>
            <h2 style="color:blue">El doble de {{numero}} es : {{doble}}</h2>
        </div>
        <button @click="redirectHome">Ir al inicio</button>
    </div>
</template>

<script>
export default {
    name : "NumeroDoble" ,
    methods : {
        redirectHome() {
            this.$router.push("/");
        },
        mostrarDoble() {
            this.numero = this.$route.params.numero;
            this.doble = parseInt(this.numero) * 2;
        }
    },
    watch : {
        //EL CONTROL DE LA VARIABLE SE REALIZA MEDIANTE STRING Y NO SE UTILIZA LA PALABRA THIS
        '$route.params.numero'(nextVal, oldVal) {
            //SI HA CAMBIADO REALIZAMOS ACCIONES
            if ( nextVal != oldVal) {
                //ACCIONES
                this.mostrarDoble();
            }
        }
    },
    mounted() {
        //CAPTURAR LOS PARAMETROS EN ESTE METODO
        if(this.$route.params.numero == "") {
            this.mensaje = "No tenemos parametro";
        } else {
            this.mostrarDoble();
        }
    },
    data() {
        return{
            numero : 0,
            doble : 0 ,
            mensaje : ""
        }
    }
}
</script>

<style>

</style>