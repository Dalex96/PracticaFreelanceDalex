<template>
  <div class="ofertas">

<div id="seccion_datos_ofertas">
<section>
<h1>Propuestas</h1>
<br>
<!-- 
  <div class="row clearfix">      

    <label class="col-xs-12 col-sm-8"></label>

    <div class="col-xs-12 col-sm-5">
      <div class="form-group">
        <label for="exampleFormControlSelect1">OPCIONES</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="data.propuesta_opcion" @change="opciones">
          <option disabled="true"></option>
          <option value="1">PROPUESTAS REALIZADAS</option>
          <option value="2">PROPUESTAS CONTRATADAS</option>
          <option value="3">PROPUESTAS RECHAZADAS</option>
        </select>
      </div>
    </div>

  </div>

  <br>
  <br> -->

<div>
  <p style="color:orange">No tiene propuestas realizadas</p>
</div>
<!-- <div v-if="option == 2">
  <p style="color:orange">No tiene propuestas contratadas</p>
</div>
<div v-if="option == 3">
  <p style="color:orange">No tiene propuestas rechazadas</p>
</div> -->

</section>
  <br>
  <br>

</div>



  </div>
</template>

<script>
import Modelo from '../../servicios/servicios_index.js'

export default {
  name: 'datos_propuestas',
  data () {
    return {
       ofertas: {},
       data:{},
       option:""
    }
  },
  mounted () {
    this.listar_ofertas()
  },
  methods: {
      opciones(){
        this.option = this.data.propuesta_opcion
      },

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


#seccion_datos_ofertas{
  margin: 12%;
  margin-top: 80px;
/*  background: red;*/
  width: 95%;
  display: inline-block;
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
