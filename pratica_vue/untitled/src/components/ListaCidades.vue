<script setup lang="ts">
import {ref} from "vue";

  var cidades = ref() // receber valor do select com v-model
const KEY = "97297449decc435ba1101111250608"; // chave de acesso da API



 function useClima(){
  const celcius_c = ref()
  const location_name=ref()
  const fahrenheit=ref()
   const  vento = ref()


function updateClima(retorno){
  celcius_c.value = Math.round(retorno.current.temp_c)
  location_name.value=retorno.location.name
  fahrenheit.value=retorno.current.temp_f
  vento.value=retorno.current.wind_kph

}
  async function getPrevisao(cidades) { // funçao que vai fazer uma requissão na api
    try { // isso caso der um erro
      const cidadeformatada = encodeURIComponent(cidades) // pegamos o valor do select e corrigimos ele pra nao dar erro
      const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${cidadeformatada}&lang=pt` // uri da api, com sua chave e parametro para busca(obrigatorio)
      const requisicao = await fetch(url); // espera a execuaçao da url que passamos
      const retorno  = await requisicao.json();// trasforma a responta em json para melhor manuser

      console.log(url);
      if (!requisicao.ok){ // verificamos a resposta
        throw  new Error(retorno.error?.message|| 'erro');
      }

      updateClima(retorno)
      //celcius_c.value = Math.round(retorno.current.temp_c)// aqui recembos valor da api, currente,temp_c , sao dados da api em json
    }

    catch (error) {
      console.log(error);
    }

  }
  return{
  celcius_c,
  location_name,
  fahrenheit,
  getPrevisao,
    vento,
  }
}








  console.log("cidade ", cidades.value);



const {celcius_c, location_name, fahrenheit,getPrevisao,vento} = useClima();
</script>

<template>

<div class="div-seach">
  <label for="cidade">Selecione uma cidade</label>
  <select name="cidade" id="cidade" v-model="cidades">
    <option value="">Selecione uma cidade</option>
    <option value="niteroi">Niteroi </option>
    <option value="cabo frio">Cabo Frio</option>
    <option value="buzios"> Buzios </option>

  </select>
  <div>
    <button class="buscar-previsao" @click="getPrevisao(cidades)">Buscar previsão</button>
  </div>
</div>



  <div class="weather-card" v-if="location_name">
    <div class="card-header">
      <h3 class="city-name">{{ location_name }}</h3>
      <div class="weather-icon">☀️</div>
    </div>

    <div class="temperature">
      {{ celcius_c }}<span class="temp-unit">°C</span>
    </div>

    <p class="condition">Ensolarado</p>

    <div class="weather-details">
      <div class="detail-item">
        <div class="detail-value">{{ fahrenheit }}°F</div>
        <div class="detail-label">Fahrenheit</div>
      </div>
      <div class="detail-item">
        <div class="detail-value">{{vento}} km/h</div>
        <div class="detail-label">Vento</div>
      </div>
    </div>
  </div>

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.weather-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.weather-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.weather-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  border-radius: 20px 20px 0 0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.city-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.weather-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.temperature {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 20px 0 10px 0;
  display: flex;
  align-items: center;
}

.temp-unit {
  font-size: 2rem;
  color: #667eea;
  margin-left: 5px;
}

.condition {
  font-size: 1.1rem;
  color: #718096;
  margin-bottom: 25px;
  font-weight: 500;
}

.weather-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.detail-item {
  background: rgba(102, 126, 234, 0.1);
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.detail-item:hover {
  background: rgba(102, 126, 234, 0.15);
  transform: translateY(-2px);
}

.detail-value {
  font-size: 1.3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 5px;
}

.detail-label {
  font-size: 0.9rem;
  color: #718096;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Card variante escuro */
.weather-card.dark {
  background: rgba(45, 55, 72, 0.95);
  color: white;
}

.weather-card.dark .city-name {
  color: #f7fafc;
}

.weather-card.dark .temperature {
  color: #f7fafc;
}

.weather-card.dark .detail-item {
  background: rgba(255, 255, 255, 0.1);
}

.weather-card.dark .detail-item:hover {
  background: rgba(255, 255, 255, 0.15);
}
.buscar-previsao {
  max-height: 200px;
}
.div-seach {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

/* Responsivo */
@media (max-width: 768px) {
  .weather-card {
    width: 100%;
    max-width: 350px;
  }
}
</style>