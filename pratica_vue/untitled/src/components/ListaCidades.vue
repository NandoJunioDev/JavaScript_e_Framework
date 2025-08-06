<script setup lang="ts">
import {ref} from "vue";

  var cidades = ref() // receber valor do select com v-model
const KEY = "97297449decc435ba1101111250608"; // chave de acesso da API



 var celcius_c = ref(null); // variavel que vai receber o valor da api

  async function getPrevisao() { // funçao que vai fazer uma requissão na api
    try { // isso caso der um erro
      const cidadeformatada = encodeURIComponent(cidades.value) // pegamos o valor do select e corrigimos ele pra nao dar erro
      const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cidadeformatada}&lang=pt` // uri da api, com sua chave e parametro para busca(obrigatorio)
       const requisicao = await fetch(url); // espera a execuaçao da url que passamos
      const retorno  = await requisicao.json();// trasforma a responta em json para melhor manuser

      console.log(url);
      if (!requisicao.ok){ // verificamos a resposta
        throw  new Error(retorno.error?.message|| 'erro');
      }

      mostrarPrevisao(retorno)
      //celcius_c.value = Math.round(retorno.current.temp_c)// aqui recembos valor da api, currente,temp_c , sao dados da api em json
    }


    catch (error) {
      console.log(error);
  }


  }

function mostrarPrevisao(retorno) {
  const location = retorno.location;
  const current = retorno.current;
  const forecast = retorno.forecast;
  const location_name = location.name;
  const country = location.country;
  const temp_c = current.temp_c;
  const temp_f = ref(current.temp_f);
  const condition = current.condition;
  const wind_kph = current.wind_kph;
  const wind_mph = current.wind_mph;
  const wind_degree = current.wind_degree;



let celcius_c = Math.round(temp_c)  ;


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