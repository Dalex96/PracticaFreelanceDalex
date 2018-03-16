<template>
  <div class="ofertas">
  <div id="seccion_proyecto_info">


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

<section>
<br>
<div class="jumbotron">
  <p class="lead">
  <hr class="my-12">
  <b>Descripción: </b><br>
  {{ listado_proyecto.descripcion_proyecto }}</p>
  <hr class="my-4">
  <div class="props_publicacion">
    <b>Presupuesto: </b><p>{{ listado_proyecto.presupuesto_proyecto }}<b>{{ listado_proyecto.moneda_proyecto }}.</b></p>
    <b>Tiempo: </b><p>{{ listado_proyecto.tiempo_entrega_proyecto }}<b>H.</b></p>
    <b>Tipo de proyecto: </b><p>{{ listado_proyecto.tipo_proyecto }}</p>
  </div>
  <div class="props_publicacion2">
    <b>Fecha de publicación: </b><p>12/12/2017</p>
    <b>Fecha de Finalización: </b><p>12/01/2018</p>
    <b>Pais: </b><p>VENEZUELA</p>
  </div>
  <hr class="my-4">
  <center><p class="lead">
  <router-link active-class="active" class="nav-item" exact tag="a" :to="{ name: 'propuesta' }">
    <a class="button is-dark" @click="seleccion_oferta">Hacer Propuesta</a>
  </router-link>
  </p></center>
</div>

<!-- <a class="button is-dark" @click="nueva_pregunta">Preguntar</a>
 -->
<h3 class="subtitle">Preguntas:</h3>
<br>


<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Escribe tu pregunta..." v-model="data_pregunta.mensaje_pregunta"></textarea>
      </p>
    </div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item"> 
          <a class="button is-dark" @click="nueva_pregunta">Preguntar</a>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <label class="checkbox">
            <input type="checkbox"> Presione ENTER para enviar
          </label>
        </div>
      </div>
    </nav>
  </div>
</article>



<article class="media" v-for="preguntas in listado_preguntas">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Barbara Middleton</strong>
        <br>
        {{ preguntas.mensaje_pregunta }}
        <br>
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
      </p>
    </div>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Sean Brown</strong>
            <br>
            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
            <br>
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>

        <article class="media">
          Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
        </article>

        <article class="media">
          Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
        </article>
      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Kayli Eunice </strong>
            <br>
            Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
            <br>
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</article>
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Comentario..."></textarea>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button">Post comment</button>
      </p>
    </div>
  </div>
</article>

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
       data_pregunta: {},
       respuesta:"",
       listado_preguntas: {},
       listado_proyecto: {}
    }
  },
  mounted () {
    this.listar_proyecto()
    this.lista_pregunta()
  },
  methods: {
      listar_proyecto(){
        Modelo.lista_un_proyecto(this.$route.params.id).then( (response) => {
          this.listado_proyecto = response[0] 
        })
      },

      seleccion_oferta(){
        return this.$router.push({
          // name: 'proyecto_info',
          path: '/proyecto/'+this.$route.params.id+'/propuesta',
          params:{
            id: this.$route.params.id
          }
        })
      },

      lista_pregunta(){
        Modelo.lista_pregunta_proyecto(this.$route.params.id).then( (response) => {
          this.listado_preguntas = response 
        })
      },      

      nueva_pregunta(){
        this.data_pregunta.fk_pertenece = this.$route.params.id
        Modelo.nueva_pregunta(this.data_pregunta).then( (response) => {
          this.data_pregunta = {}
          this.lista_pregunta()
        })
      }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/javascript" scope>


#seccion_proyecto_info{
  margin: 12%;
  margin-top: 80px;
/*  background: red;*/
  width: 80%;
  display: inline-block;
}
.textar{
  resize: none;
  overflow: hidden; 
  overflow-y: auto; 
}

.props_publicacion{
  display: inline-block;
  margin-left: 0%;
}

.props_publicacion2{
  display: inline-block;
  margin-left: 30%;
}

/*.card{
  width: 400px;
  height: 200px;
}*/
</style>
