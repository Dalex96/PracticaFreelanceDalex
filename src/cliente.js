import axios from 'axios'
import querystring from 'querystring'

// var instancia = axios.create({
//   baseURL: 
// })

const API_PHERLANCE = axios.create({
    // baseURL: "http://plataforma.cobro.deploy.veca/v1",
    baseURL: 'http://localhost:8000'
    // auth: { 
    // 	username: 'traduce',
    // 	password: '123'
    // },
    //withCredentials: true
});

export default {
	cliente: API_PHERLANCE,
	install(Vue){
		Vue.prototype.$http = API_PHERLANCE
	}
}
