<template>
    <div>
        <div v-if="!isLogin">
            <landing-page @isLogin="changeLoginStatus"></landing-page>
        </div>
        <div v-if="isLogin">
            <!-- <h1>logged in !</h1>
            <button @click="signOut">logout</button>
            <upload-files></upload-files> -->
            <home-page @isLogin="changeLoginStatus"></home-page>
        </div>
    </div>
</template>

<script>

import LandingPage from './components/LandingPage.vue'
import UploadFiles from './components/uploadFile.vue'
import HomePage from './components/HomePage.vue'

export default {
    components : {
        LandingPage,
        UploadFiles,
        HomePage
    },
    data(){
        return{
            isLogin : localStorage.getItem('token') ? true : false
        }
    },
    methods : {
        changeLoginStatus(value){
            console.log('value: ', value);
            if(value === false) localStorage.clear()
            this.isLogin = value
        },
        signOut(){
            localStorage.clear()
            this.isLogin = false
        }
    }
}
</script>

<style>
* {
    margin : 0;
    padding: 0;
}
</style>
