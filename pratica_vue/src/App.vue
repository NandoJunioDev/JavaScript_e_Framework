<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import teste from './components/teste.vue'
import {ref} from "vue";


var  imgSrc = " https://placehold.co/600x400"
var  imgAlt = " Testando o vue "
imgSrc = false
var hide = false
  const array = ref([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ])
var divcurso = true;
let titleteste = true;
let pclass = ['teste', { 'div-segundo':divcurso}]
var stylecss = {color:'white', backgroundColor: 'green'};

</script>





<template>



  <div :class="{'div-teste':divcurso}" >
    <h1 :class="{'title2':titleteste} ">Curso vue 3</h1>
    <p :class = " {'paragrafo':true}">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
      asperiores assumenda dolore mque eaque enim est eum fuga fugiat iusto minima natus non porro possimus, quia quibusdam quod reiciendis tempore vel?   </p>
  </div>

  <div :class="['div-teste', {'div-segundo': titleteste}]">
    <h2> segundo teste</h2>
    <p  :class="pclass">
      agora asdhajdad
    </p>
  </div>
  <h3 :style="{'color':'red'}">
    vamo que vamos
    <p :style="stylecss">
      agora testanto com style +  objs

    </p>
  </h3>


  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">



    </div>

    <div v-if="imgSrc"  class="div-img-container">
      <img :src=" imgSrc " :alt="imgAlt">
    </div>






  </header>



  <main>

    <div  v-show="hide" v-for="obj in array" v-bind:key="obj.id" class="teste" >

      {{obj.title}}
    </div>
  </main>


<div></div>


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
.teste{
font-family: "JetBrains Mono Light";
}



.div-teste{
  background-color: rgba(100, 149, 237, 0.24);
}
.title2{
  color: yellow;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 20px;
}
.paragrafo{
  color:greenyellow;
}
.div-segundo{
  background-color: rgba(255, 255, 0, 0.43);
}
body{
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
}
</style>
