<template>
  <div class="ofertas">

<div id="seccion_ayuda">
<section>
<h1 class="subtitle">Contratadas</h1>
<br>

<div class="card orden card_modificacion" v-for="todas in propuestas">
  <header class="card-header">
    <a class="card-header-title" @click="seleccion_oferta(todas.id_proyecto)">
      {{ todas.titulo_proyecto }} #{{ todas.id_proyecto }}
    </a>
    <a class="card-header-icon spacio_card_contrato" aria-label="more options" @click="mensaje">

    </a>
  </header>
  <div class="card-content">
    <div class="content">
      {{ todas.mensaje_propuesta }}
      <br>
    </div>
  </div>
    <header class="card-header">
    <p class="card-header-title">
      Presupuesto: {{ todas.presupuesto_propuesta }}{{ todas.moneda_propuesta }}
    </p>    
    <p class="card-header-title">
      Tiempo: {{ todas.tiempo_propuesta }}H
    </p>    
    <p class="card-header-title">
    Fecha:
    </p>

  </header>
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
       cant: 12,
       propuestas: {}
    }
  },
  mounted () {
    this.listar_propuestas()
  },
  methods: {

      listar_propuestas(){
        Modelo.lista_propuestas_segun_el_proyecto_n().then( (propuestas) => {
          this.propuestas = propuestas 
          console.log(propuestas)
        })
      },
      mensaje(){
        alert("HOLA")
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

.spacio_icon{
  width: 1%;
  background: red;
}
.spacio_card_contrato{
  background: green;
  width: 4%;
  border-radius: 1000px;
  height: 35px;
  margin-top: 16px;
  margin: 20px; 
}
.card_modificacion{
  width: 72%;
}
/*.card{
  width: 400px;
  height: 200px;
}*/
</style>
