<template>
  <div class="ofertas">

<div id="seccion_contacto" class="contenedor">
  <section>
  <h1 class="subtitle">Contactanos</h1><br>
  <form>
    <div class="row clearfix">

      <b-field label="Asunto">
          <b-input v-model="data.asunto_contacto"></b-input>
      </b-field>

      <b-field label="Descripción">
          <b-input maxlength="200" type="textarea" v-model="data.mensaje_contacto"></b-input>
      </b-field>

      <b-field label="Tipo">
        <b-select placeholder="Tipo" v-model="data.tipo_contacto">
            <option>AYUDA</option>
        </b-select>      
      </b-field>  

      <label class="col-xs-12 col-sm-8"></label>


    <br>
    </div>

      <a class="button is-dark" @click="contacto_nuevo">ENVIAR</a>

  </form>
  </section>
</div>



  </div>
</template>

<script>
import Modelo from '../../servicios/servicios_index.js'

export default {
  name: 'contacto',
  data () {
    return {
      data:{},
      respuesta:""
    }
  },
  mounted () {

  },
  methods: {

      contacto_nuevo(){
        Modelo.contacto_nuevo(this.data).then( (response) => {
          this.respuesta = response 
          this.data = {}
        })
      },
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/javascript" scope>


#seccion_contacto{
  margin: 12%;
  margin-top: 80px;
/*  background: red;*/
  width: 60%;
  display: inline-block;
  margin-left: 20%;
}

/*.orden{
  float: left;
  margin: 1%; 
}
.card{
  width: 400px;
  height: 200px;
}*/
</style>
