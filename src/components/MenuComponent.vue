<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li> |
            <li><router-link to="/deportes">Deportes</router-link></li> |
            <li><router-link to="/comics">Comics</router-link></li> |
            <li><router-link to="/doble/11">Numero doble 11</router-link></li> |
            <li><router-link to="/doble/7">Numero doble 7</router-link></li> |
            <li><router-link to="/doble/">Numero sin parametro</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name : "MenuComponent" ,

}
</script>

<style>
    li{
        display: inline;
    }
</style>