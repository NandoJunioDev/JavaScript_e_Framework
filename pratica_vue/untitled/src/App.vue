<script setup>

import Cabecalho from "@/components/Cabecalho.vue";
import ListaCidades from "@/components/ListaCidades.vue";
import {reactive, ref} from "vue";

const  weather  = ref(null)
const loading = ref(false)
const error = ref(null)
const city= ref(null)

const  fetchweather = async (city) => {
loading.value = true;
error.value = null;
try {
  const API_KEY = "1a84ae6843bd47ce87d01438250508"

  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&lang=pt')
  if (response.ok) {
    throw new Error("Erro ao tentar o cidade");
  }
  const json = await response.json()
  weather.value = {
    city: data.location.name,
    temperature: Math.round(data.current.temp_c),
    description: data.current.condition.text,
    humidicity: data.current.humidicity,
    icon: getWeatherIcon(data.curruent.codition.code)
  }
}
  catch(err){
    error.value = 'Erro ao tentar o cidade' + err.message;

  }
  finally{
    loading.value = false;
  }
}

const  getWeatherIcon = (conditionCode) => {
  const icons = {
    1000: '☀️', // Sunny/Clear
    1003: '⛅', // Partly cloudy
    1006: '☁️', // Cloudy
    1009: '☁️', // Overcast
    1030: '🌫️', // Mist
    1063: '🌦️', // Patchy rain possible
    1066: '🌨️', // Patchy snow possible
    1069: '🌨️', // Patchy sleet possible
    1072: '🌨️', // Patchy freezing drizzle possible
    1087: '⛈️', // Thundery outbreaks possible
    1114: '🌨️', // Blowing snow
    1117: '❄️', // Blizzard
    1135: '🌫️', // Fog
    1147: '🌫️', // Freezing fog
    1150: '🌦️', // Patchy light drizzle
    1153: '🌦️', // Light drizzle
    1168: '🌨️', // Freezing drizzle
    1171: '🌨️', // Heavy freezing drizzle
    1180: '🌦️', // Patchy light rain
    1183: '🌧️', // Light rain
    1186: '🌦️', // Moderate rain at times
    1189: '🌧️', // Moderate rain
    1192: '🌧️', // Heavy rain at times
    1195: '⛈️', // Heavy rain
    1198: '🌨️', // Light freezing rain
    1201: '🌨️', // Moderate or heavy freezing rain
    1204: '🌨️', // Light sleet
    1207: '🌨️', // Moderate or heavy sleet
    1210: '🌨️', // Patchy light snow
    1213: '❄️', // Light snow
    1216: '🌨️', // Patchy moderate snow
    1219: '❄️', // Moderate snow
    1222: '❄️', // Patchy heavy snow
    1225: '❄️', // Heavy snow
    1237: '🌨️', // Ice pellets
    1240: '🌦️', // Light rain shower
    1243: '🌧️', // Moderate or heavy rain shower
    1246: '⛈️', // Torrential rain shower
    1249: '🌨️', // Light sleet showers
    1252: '🌨️', // Moderate or heavy sleet showers
    1255: '❄️', // Light snow showers
    1258: '❄️', // Moderate or heavy snow showers
    1261: '🌨️', // Light showers of ice pellets
    1264: '🌨️', // Moderate or heavy showers of ice pellets
    1273: '⛈️', // Patchy light rain with thunder
    1276: '⛈️', // Moderate or heavy rain with thunder
    1279: '⛈️', // Patchy light snow with thunder
    1282: '⛈️'  // Moderate or heavy sn

  }
  return icons [conditionCode];

}





</script>

<template>



  <label > Selecione  as cidades em baixo </label>
  <select v-model="city" @keyup.enter ="fetchweather(city)">
    <option value="">Selecione</option>
    <option value="rioDeJaneiro">Rio de Janeiro</option>
    <option value="saoPaulo"> Sao Paulo</option>
    <option value="minasGerais">Minas Gerais</option>
  </select>

  <div v-if="loading">Carregando...</div>          <!-- Só mostra se loading = true -->
  <div v-else-if="error">{{ error }}</div>         <!-- Só mostra se tem erro -->
  <div v-else-if="weather">{{ weather.city }}</div> <!-- Só mostra se tem dados -->

  <h2>{{ weather.city }}</h2>           <!-- Mostra nome da cidade -->
  <span>{{ weather.temperature }}°</span> <!-- Mostra temperatura -->
  <p>{{ weather.description }}</p>       <!-- Mostra descrição -->

  <cabecalho/>
  <div class="lista">
    <div class="card" v-for="cidade in cidades " :key="cidade.id" >
    <div class="card-imagem"></div>
      <h3>{{cidade.name}}</h3>
      <h4>{{cidade.description}}</h4>
      <div class="temperatura ">{{testa}}º</div>



    </div>

  </div>


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
