<template>
  <div class="ofertas">

<div id="seccion_ofertas">

<!-- <div v-if="cargando">
  <center><h3><b>Cargando...</b></h3></center>
</div> -->

<template v-if="cargando">
    <section>
        <b-loading :active.sync="cargando"></b-loading>
    </section>
</template>

<section v-else>
<div class="row clearfix" id="titulo_componente">
  <h1 class="subtitle">Proyectos Freelance</h1>
<br>
<br>
<br>
</div>  




<!--   <div class="card text-white bg-secondary mb-3 orden orden_card" style="max-width: 20rem; cursor: pointer;" v-for="listado_ofertas in ofertas" @click="seleccion_oferta(listado_ofertas.id_proyecto)">
    <div class="card-header">dalex96</div>
    <div class="card-body">
      <h5 class="card-title" id="title">{{ listado_ofertas.titulo_proyecto }}</h5>
      <p class="card-text" id="descripcion" maxlength="30">{{ listado_ofertas.descripcion_proyecto }}...</p>
    </div>
    <div class="card-header">
      Presupuesto: {{ listado_ofertas.presupuesto_proyecto }} {{ listado_ofertas.moneda_proyecto }}
    </div>
  </div> -->
<div class="orden_card orden" v-for="listado_ofertas in ofertas" @click="seleccion_oferta(listado_ofertas.id_proyecto)" style=" cursor: pointer;" >
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{ listado_ofertas.titulo_proyecto }}
    </p>
    <a class="card-header-icon" aria-label="more options">
      <span class="icon">
        {{ listado_ofertas.presupuesto_proyecto }} {{ listado_ofertas.moneda_proyecto }}
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
      {{ listado_ofertas.descripcion_proyecto }}
    </div>
  </div>
  <footer class="card-footer">
    <time datetime="2016-1-1" style="margin-left:10px;">Hace 11 horas</time>
<!--     <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a> -->
  </footer>
</div>
<br>
</div>



</section>

</div>
  <br v-if="cargando">
  <br v-if="cargando">
  <br v-if="cargando">
  <br v-if="cargando">
  <br v-if="cargando">  
  <br v-if="cargando">
  <br v-if="cargando">
  <br v-if="cargando">
  <br v-if="cargando">
  <br v-if="cargando">
  <br v-if="cargando">

  </div>
</template>

<script>
import Modelo from '../../servicios/servicios_index.js'

export default {
  name: 'ofertas',
  data () {
    return {
       ofertas: {},
       cargando: true
    }
  },
  mounted () {
    this.listar_ofertas()
  },
  methods: {

      listar_ofertas(){
        Modelo.listar_ofertas().then( (ofertas) => {
          this.ofertas = ofertas
          this.cargando = false 
        })
      },

      seleccion_oferta(dato){
        console.log(dato)
        return this.$router.push({
          // name: 'proyecto_info',
          path: '/proyecto/'+dato,
          params:{
            id: dato
          }
        })
      },   
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/javascript" scope>


#seccion_ofertas{
  margin: 12%;
  margin-top: 80px;
/*  background: red;*/
  width: 94%;
  display: inline-block;
}
.orden{
  float: left;
  margin: 1%; 
}
.orden_card{
  width: 80%;
}

.icon{
  width: 100%;
  /*height: 200px;*/
}
</style>
