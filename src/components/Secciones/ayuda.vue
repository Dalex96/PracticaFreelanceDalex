<template>
  <div class="ofertas">

<div id="seccion_ayuda">
<section>
<h1 class="subtitle">Preguntas frecuentes</h1>
<br>

<div class="card orden">
  <header class="card-header">
    <p class="card-header-title">
      ¿Como hacer una propuesta?
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      se busca un editor de videos en after effects con tiempo parcial o corrido segun sea necesario.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
<br>

<div class="card orden">
  <header class="card-header">
    <p class="card-header-title">
      ¿Como hacer una propuesta?
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      se busca un editor de videos en after effects con tiempo parcial o corrido segun sea necesario.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
<br>

<div class="card orden">
  <header class="card-header">
    <p class="card-header-title">
      ¿Como hacer una propuesta?
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      se busca un editor de videos en after effects con tiempo parcial o corrido segun sea necesario.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
<br>

<div class="card orden">
  <header class="card-header">
    <p class="card-header-title">
      ¿Como hacer una propuesta?
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      se busca un editor de videos en after effects con tiempo parcial o corrido segun sea necesario.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
<br>


</section>
</div>



  </div>
</template>

<script>
import Modelo from '../../servicios/servicios_index.js'

export default {
  name: 'proyecto_nuevo',
  data () {
    return {
       cant: 12,
       ofertas: {}
    }
  },
  mounted () {
    this.listar_ofertas()
  },
  methods: {

      listar_ofertas(){
        Modelo.listar_ofertas().then( (ofertas) => {
          this.ofertas = ofertas 
        })
      },
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/javascript" scope>


#seccion_ayuda{
  margin: 12%;
  margin-top: 80px;
/*  background: red;*/
  width: 95%;
  display: inline-block;
  margin-left: 15%;
}
.orden{
  float: left;
  margin: 1%; 
}
/*.card{
  width: 400px;
  height: 200px;
}*/
</style>
