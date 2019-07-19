<template>
    <div>
        <!-- belum login -->
        <div v-if="!isLogin">
            <form-gp @dataForm="changeLogin"></form-gp>
        </div>
        <!-- udah login -->
        <div v-if="isLogin">
            <button @click="isLogin = false">LOGOUT</button>
            <show-pass @nama="method" :arrayArticles="arrayArticles"></show-pass>
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
            dataLogin : '',
            arrayArticles: []
        }
    },
    methods: {
        changeLogin(value){
            this.dataLogin = value
            localStorage.setItem('token', value.username)
            this.isLogin = true
        },
        getAllarticles(){
            this.arrayArticles = [{
                id: 1,
                title : 'A',
                desc: 'a'
            },
            {
                id: 2,
                title : 'B',
                desc: 'b'
            }]
        }
    }, 
    created(){
        this.getAllarticles()
    }
}
</script>

<style scoped>
h1 {
    font-family: Arial, Helvetica, sans-serif;
}

</style>
