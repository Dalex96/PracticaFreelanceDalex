<template>
  <div class="ofertas">

<div id="seccion_nuevo_proyecto">
<section>

<!-- <div class="alert alert-success" role="alert" id="respuesta"></div> -->



<div class="col-xs-12 col-sm-12 contenedor">
  <h1 class="subtitle">Proyectos</h1><br>
  <form>
    <div class="row clearfix">

      <b-field label="Titulo">
          <b-input maxlength="50" v-model="data.titulo_proyecto"></b-input>
      </b-field>

      <b-field label="Descripción">
          <b-input type="textarea" v-model="data.descripcion_proyecto"></b-input>
      </b-field>


      <b-field label="Presupuesto"></b-field>
      <b-field>
        <b-select placeholder="Moneda" v-model="data.moneda_proyecto">
            <option>USD</option>
            <option>VEF</option>
        </b-select>
        <b-input type="number" placeholder="0,00" v-model="data.presupuesto_proyecto"></b-input>
      </b-field>
    
      <b-field label="Fecha">
        <b-input type="number" placeholder="0,00" v-model="data.tiempo_entrega_proyecto"></b-input>
      </b-field>
<!--       <b-field label="Select a date">
          <b-datepicker
              placeholder="Click to select..."
              :min-date="minDate"
              :max-date="maxDate"
              v-model="data.tiempo_entrega_proyecto">
          </b-datepicker>
      </b-field>  -->   

      <b-field label="Tipo">
        <b-select placeholder="Select a name" v-model="data.tipo_proyecto">
            <option>PROGRAMACION</option>
            <option>DISEÑO GRAFICO</option>
            <option>POST PRODUCCION</option>
        </b-select>
      </b-field>  


    </div>
    <br>

    <a class="button is-dark" @click="confirmCustom">CREAR</a>


  </form>
</div>



</section>
</div>
  <br>
  <br>
  <br>



  </div>
</template>

<script>
import Modelo from '../../servicios/servicios_index.js'

export default {
  name: 'proyecto_nuevo',
  data () {
    const today = new Date()
    return {
      respuesta: {},
      data_opcion:{},
      data:{},
      option:"",
      date: new Date(),
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
      maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)       
    }
  },
  mounted () {
  },
  methods: {
      opciones(){
        this.option = this.data_opcion.proyecto_opcion
      },

      proyecto_nuevo(){
        console.log(this.data)
        Modelo.proyecto_nuevo(this.data).then( (response) => {
          this.respuesta = response 
          this.data = {}
          this.$toast.open('Proyecto Creado')
        })
      },
      confirmCustom() {
          this.$dialog.confirm({
              title: 'Privacy Politics',
              message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fusce id fermentum quam. Proin sagittis,
                  nibh id hendrerit imperdiet, elit sapien laoreet elit,
                  ac scelerisque diam velit in nisl. Nunc maximus ex non
                  laoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,
                  augue purus placerat justo,
                  sit amet porttitor dui metus in nisl.
                  Nulla non leo placerat, porta metus eu, laoreet risus.
                  Etiam lacinia, purus eu luctus maximus, elit ex viverra tellus,
                  sit amet sodales quam dui nec odio.
                  Nullam porta mollis est. Quisque aliquet malesuada fringilla.
                  Pellentesque volutpat lacus at ante posuere,
                  non pulvinar ante porta. Proin viverra eu massa nec porta.
                  Aliquam rhoncus velit quis sem hendrerit,
                  ut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,
                  eleifend venenatis ligula.
                  Praesent molestie mauris sed elit posuere, non malesuada libero gravida.
                  In hac habitasse platea dictumst.
                  Pellentesque habitant morbi tristique senectus
                  et netus et malesuada fames ac turpis egestas.`,
              cancelText: 'Declinar',
              confirmText: 'Aceptar',
              type: 'is-success',
              onConfirm: () => this.proyecto_nuevo()
          })
      },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/javascript" scope>


#seccion_nuevo_proyecto{
  margin: 12%;
  margin-top: 80px;
/*  background: red;*/
  width: 60%;
  margin-left: 20%;
  display: inline-block;
}
/*.contenedor{
  width: 60%;
}*/

</style>
