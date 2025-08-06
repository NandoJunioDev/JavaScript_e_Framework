<script setup lang="ts">
import {ref} from "vue";

  var cidades = ref()
const KEY = "97297449decc435ba1101111250608";



 var celcius_c = ref(null);

async function getPrevisao() {
  try {
    const cidadeformatada = encodeURIComponent(cidades.value)
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cidadeformatada}&lang=pt`
    const requisicao = await fetch(url);
    const retorno  = await requisicao.json();

    console.log(url);
    if (!requisicao.ok){
      throw  new Error(retorno.error?.message|| 'erro');
    }

    celcius_c.value = Math.round(retorno.current.temp_c);
  }


  catch (error) {
    console.log(error);
}


}

function mostrarPrevisao(retorno) {
  const location = retorno.location;
  const celcius = retorno.current.temp_c;

celcius_c.value = Math.round(celcius);
}


console.log("cidade ", cidades.value);



</script>

<template>


  <label for="cidade">Selecione uma cidade</label>
  <select name="cidade" id="cidade" v-model="cidades">
    <option value="">Selecione uma cidade</option>
    <option value="niteroi">Niteroi </option>
    
  </select>
  <h2>{{cidades}}</h2>
  <h3> temperatura atual {{celcius_c}}   </h3>

    <button @click="getPrevisao">Buscar previsão</button>


</template>

<style scoped>

</style>