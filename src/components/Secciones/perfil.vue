<template>
  <div class="ofertas">
  <div id="seccion_perfil" class="contenedor_perfil">

<section>
<h1 class="subtitle">Perfil</h1>
<br>
<div class="jumbotron">

  <center><div>
    <img src="../../../static/img/logo.jpg" width="300" height="300" style="border-radius: 600px;">
    <h2 class="subtitle">@DALEX96</h2>
  </div></center>  
  <hr>
  
<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Contratadas</p>
      <p class="title">0</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Neutral</p>
      <p class="title">0</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Positivo</p>
      <p class="title">0</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Negativo</p>
      <p class="title">0</p>
    </div>
  </div>
</nav>

  <hr>
  <div>
    <h4>Descripción:</h4>
    <p>Soy Daniel Cabrera tengo 21 años, estudiante de ingenieria en informatica</p>
  </div>
  <hr>

</div>



</section>




</div></center>
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


#seccion_perfil{
  margin: 12%;
  margin-top: 80px;
/*  background: red;*/
  width: 80%;
  display: inline-block;
}

.contenedor_perfil{
  width: 60%;
}
/*.card{
  width: 400px;
  height: 200px;
}*/
</style>
