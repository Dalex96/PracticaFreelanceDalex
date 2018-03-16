<template>
  <div id="app">
<!-- <img src="../static/img/cintillo20173.png" id="cintillo" v-if="ver"> -->
    

<!-- 
    <div class="modal-mask_base" v-if="showModal_in">
  <div class="modal-wrapper_base">
    <div class="modal-container_base">

  <div id="base_intro" v-if="modali1">
    <center v-if="modali1">
      <h1 class="encabezado_intro">Bienvenidos a AIDA</h1>
    </center>

        <div class="modal-body_base" v-if="modali1">
          <slot name="body">
            <img :src="img_static + name_img" id="img_id_main" class="container">
          </slot>
        </div>

    </div>

                
    </div>
      </div>


    </div> -->

<nav class="navbar is-transparent is-dark">
  <div class="navbar-brand">
    <a class="navbar-item">
    Pherlance
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">

        <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'ofertas' }">
          <a class="navbar-item">Freelance</a>
        </router-link>        

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Propuestas
        </a>
        <div class="navbar-dropdown is-boxed">
          <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'propuesta_realizada' }">
            <a class="navbar-item">
              Realizadas
            </a>
          </router-link>          

          <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'propuesta_contratada' }">
            <a class="navbar-item">
              Contratadas
            </a>
          </router-link>          

          <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'propuesta_rechazada' }">
            <a class="navbar-item">
              Rechazadas
            </a>
          </router-link>        

        </div>
      </div>      

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Proyectos
        </a>
        <div class="navbar-dropdown is-boxed">
          <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'proyecto_nuevo' }">
            <a class="navbar-item">
              Nuevo
            </a>
          </router-link>           

          <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'proyecto_activo' }">
            <a class="navbar-item">
              Activos
            </a>
          </router-link>           

          <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'proyecto_culminado' }">
            <a class="navbar-item">
              Culminados
            </a>
          </router-link>        

        </div>
      </div>

        <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'ayuda' }">
          <a class="navbar-item">Ayuda</a>
        </router-link>        

        <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'contacto' }">
          <a class="navbar-item">Contactanos</a>
        </router-link>        

    </div>

    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <img src="../static/img/logo2.jpg" width="35" height="30" style="border-radius: 500px; cursor:pointer">
        </a>

        <div class="navbar-dropdown is-right">
          <router-link active-class="active" exact tag="li" :to="{ name: 'perfil' }">
            <a class="navbar-item">
              Perfil
            </a>
          </router-link>    
          <a class="navbar-item">
            Configuración
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
          <a>
            Salir
          </a>
          </div>
        </div>
      </div>
    </div>
<!-- 
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">



            <a class="button is-primary">
            PERFIL
              <router-link active-class="active" class="navbar-item" exact tag="li" :to="{ name: 'perfil' }">
                <img src="../static/img/logo.jpg" width="40" height="40" style="border-radius: 20px; cursor:pointer">
              </router-link>
            </a>
          </p>
        </div>
      </div>
    </div> -->
  </div>
</nav>



    <div class="container-fluid" id="contenido">
      <div class="row">
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <transition name="fade" mode="out-in">
            <router-view active-class="active" exact tag="li" :to="{ name: 'ofertas' }">Inicio</router-view>
          </transition>
        </div>
      </div>      
    </div>



<footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>&copy Pherlance</strong> 
      </p>
    </div>
  </div>
</footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;   
}

#contenido{
  /*margin-left: 10%;*/
}
</style>
