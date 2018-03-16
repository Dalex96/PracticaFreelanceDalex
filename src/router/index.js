import Vue from 'vue'
import Router from 'vue-router'
import inicio from '@/components/inicio'
import ofertas from '@/components/Secciones/ofertas'
import datos_propuestas from '@/components/Secciones/datos_propuestas'
import perfil from '@/components/Secciones/perfil'
import ayuda from '@/components/Secciones/ayuda'
import contacto from '@/components/Secciones/contacto'

import propuesta from '@/components/Secciones/propuesta'
import propuesta_realizada from '@/components/Secciones/propuestas_realizadas'
import propuesta_contratada from '@/components/Secciones/propuestas_contratadas'
import propuesta_rechazada from '@/components/Secciones/propuestas_rechazadas'

import proyecto_info from '@/components/Secciones/proyecto_info'
import proyecto_nuevo from '@/components/Secciones/nuevo_proyecto'
import proyecto_activo from '@/components/Secciones/proyecto_activo'
import proyecto_culminado from '@/components/Secciones/proyecto_culminado'

Vue.use(Router)

export default new Router({
  routes: [      
    {
      path: '/',
      name: 'ofertas',
      component: ofertas
    },       
    {
      path: '/proyecto/nuevo',
      name: 'proyecto_nuevo',
      component: proyecto_nuevo
    },    
    {
      path: '/proyecto/:id',
      name: 'proyecto_info',
      component: proyecto_info
    },    
    {
      path: '/proyecto/:id/propuesta',
      name: 'propuesta',
      component: propuesta
    },    
    {
      path: '/proyecto/activo',
      name: 'proyecto_activo',
      component: proyecto_activo
    },    
    {
      path: '/proyecto/culminado',
      name: 'proyecto_culminado',
      component: proyecto_culminado
    },    
    {
      path: '/propuesta',
      name: 'datos_propuestas',
      component: datos_propuestas
    },    
    {
      path: '/propuesta/realizada',
      name: 'propuesta_realizada',
      component: propuesta_realizada
    },    
    {
      path: '/propuesta/contratada',
      name: 'propuesta_contratada',
      component: propuesta_contratada
    },     
    {
      path: '/propuesta/rechazada',
      name: 'propuesta_rechazada',
      component: propuesta_rechazada
    },    
    {
      path: '/ayuda',
      name: 'ayuda',
      component: ayuda
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: contacto
    },    
    {
      path: '/perfil',
      name: 'perfil',
      component: perfil
    },   
  ]
})
