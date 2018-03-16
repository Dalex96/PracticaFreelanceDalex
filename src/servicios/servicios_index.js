import http from '../cliente.js'
import querystring from 'querystring'

export default {

  listar_ofertas (params) {
    return http.cliente.get(`/proyecto/lista`, querystring.stringify(params))
    .then(response => response.data)
  },
    
  lista_pregunta_proyecto (params) {
    return http.cliente.get(`/pregunta/proyecto/${params}`, querystring.stringify(params))
    .then(response => response.data)
  },  

  lista_un_proyecto(params) {
    return http.cliente.get(`/proyecto/lista/${params}`, querystring.stringify(params))
    .then(response => response.data)
  },  

  lista_propuestas_segun_el_proyecto_n(params) {
    return http.cliente.get(`/propuesta/lista/proyecto`, querystring.stringify(params))
    .then(response => response.data)
  },  

  proyecto_nuevo (params) {
    return http.cliente.post(`/proyecto/nuevo`, querystring.stringify(params))
    .then(response => response.data)
  },  

  contacto_nuevo (params) {
    return http.cliente.post(`/contacto/nuevo`, querystring.stringify(params))
    .then(response => response.data)
  },   

  nueva_pregunta (params) {
    return http.cliente.post(`/pregunta/nuevo`, querystring.stringify(params))
    .then(response => response.data)
  },  

  nueva_propuesta (params) {
    return http.cliente.post(`/propuesta/nuevo`, querystring.stringify(params))
    .then(response => response.data)
  },  


  

  
}