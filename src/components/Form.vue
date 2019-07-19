<template>
    <div>
        <h1 v-if="optionForm === 'login'">ini form login</h1>
        <h1 v-if="optionForm === 'register'">ini form register</h1>
        <form @submit.prevent="submitForm">
            <label for="username">Username</label>
            <input v-model="form.username" type="text">

            <label v-if="optionForm === 'register'" for="email">Email</label>
            <input v-if="optionForm === 'register'" v-model="form.email" type="email">

            <label for="password">password</label>
            <input v-model="form.password" type="password">

            <input type="submit" value="submit">
            <button v-if="optionForm === 'login'" @click="changeForm('register')">go to register</button>
            <button v-if="optionForm === 'register'" @click="changeForm('login')">go to login</button>
        </form>
        

    </div>
</template>

<script>

export default {
    data(){
        return {
            optionForm : 'login',
            form : {
                username : '',
                email : '',
                password : ''
            }
            
        }
    },
    methods: {
        submitForm(){
            console.log(this.form);
            if(this.optionForm === 'login'){
                this.$emit('dataForm', this.form)   
            } else {
                
            }
        },
        changeForm(form){
            this.optionForm = form
        }

    }
}
</script>

<style>

</style>
