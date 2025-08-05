<script setup>

import Cabecalho from "@/components/Cabecalho.vue";
import ListaCidades from "@/components/ListaCidades.vue";
import {ref} from "vue";
</script>

<template>
  <cabecalho/>
  <div class="lista">
    <div class="card" v-for="cidade in cidades " :key="cidade.id" >
    <div class="card-imagem"></div>
      <h3>{{cidade.name}}</h3>
      <h4>{{cidade.description}}</h4>
      <div class="temperatura ">{{}}º</div>



    </div>

  </div>

<lista-cidades/>
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
