<script setup lang="ts">
import {ref} from "vue";
  let testa = ref()
</script>

<template>

  <label for="testa"> Selecione  as cidades em baixo</label>
       <select v-model="testa">
         <option value="">Selecione</option>
         <option value="rioDeJaneiro">Rio de Janeiro</option>
         <option value="saoPaulo"> Sao Paulo</option>
         <option value="minasGerais">Minas Gerais</option>
         
       </select>
  




</template>

<style scoped>

</style>