<template>
    <div>
        <div v-if="!isLogin">
            <form-gp @dataForm="changeLogin"></form-gp>
        </div>
        <div v-if="isLogin">
            <h1>udah login !</h1>
            <button @click="isLogin = false">LOGOUT</button>
            <show-pass :dataLogin="dataLogin" ></show-pass>
        </div>
    </div>
</template>

<script>

import formGp from './components/Form.vue'
import showPass from './components/showPassword.vue'

export default {
    components: {
        formGp,
        showPass
    },
    data(){
        return {
            isLogin : localStorage.getItem('token') ? true : false,
            dataLogin : ''
        }
    },
    methods: {
        changeLogin(value){
            this.dataLogin = value
            localStorage.setItem('token', value.username)
            this.isLogin = true
        }
    }
}
</script>

<style>


</style>
