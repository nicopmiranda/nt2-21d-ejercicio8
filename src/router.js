import Vue from 'vue'
import VueRouter from 'vue-router'

import Usuarios from './components/Usuarios.vue'
import Formulario from './components/Formulario/index.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/usuarios', component: Usuarios }
    ]
})