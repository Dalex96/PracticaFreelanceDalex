<template>
  <div class="ofertas">
  <div id="seccion_propuesta">

<section>

<section class="hero is-dark">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{ listado_proyecto.titulo_proyecto }}
      </h1>
      <h2 class="subtitle">
        Proyecto #{{ listado_proyecto.id_proyecto }}
      </h2>
    </div>
  </div>
</section>


<h1 class="subtitle"></h1>
<br>
<div class="jumbotron">
<!--   <h2 class="display-4"></h2> -->
  <p class="lead">
  <hr class="my-12">
  <b>Descripción: </b><br>
  {{ listado_proyecto.descripcion_proyecto }}</p>
  <hr class="my-4">

  <h3 class="subtitle">Propuesta</h3>
<div class="row clearfix">


      <b-field label="Descripción">
          <b-input maxlength="200" type="textarea" v-model="datos.mensaje_propuesta"></b-input>
      </b-field>

          <b-field label="Presupuesto">
          <b-input v-model="datos.presupuesto_propuesta"></b-input>
          </b-field> 

      <b-field label="Moneda">
        <b-select placeholder="Moneda" v-model="datos.moneda_propuesta">
            <option>USD</option>
            <option>VEF</option>
        </b-select>
      </b-field>

          <b-field label="Tiempo">
          <b-input v-model="datos.tiempo_propuesta"></b-input>
          </b-field>

<a class="button is-dark" @click="nueva_propuesta">ENVIAR PROPUESTA</a>


</div>
</div>

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
       ofertas: {},
       listado_proyecto:{},
       datos:{}
    }
  },
  mounted () {
    this.listar_proyecto()
    // this.listar_ofertas()
  },
  methods: {

      listar_proyecto(){
        Modelo.lista_un_proyecto(this.$route.params.id).then( (response) => {
          this.listado_proyecto = response[0] 
        })
      },

      nueva_propuesta(){
        this.datos.propuesta_contrato = ""
        this.datos.fk_id_proyecto = this.$route.params.id
        console.log(this.datos)
        Modelo.nueva_propuesta(this.datos).then( (response) => {
          this.datos = {}
        })        
      }

      // listar_ofertas(){
      //   Modelo.listar_ofertas().then( (ofertas) => {
      //     this.ofertas = ofertas 
      //   })
      // },
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/javascript" scope>


#seccion_propuesta{
  margin: 12%;
  margin-top: 80px;
/*  background: red;*/
  width: 80%;
  display: inline-block;
}


/*.card{
  width: 400px;
  height: 200px;
}*/
</style>
