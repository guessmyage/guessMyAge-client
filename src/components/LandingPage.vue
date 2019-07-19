<template>
  <div id="landing">
    <div class="columns">
      <div class="column is-2"></div>
      <div id="contentLanding" class="column">
        <h1>SIGN IN WITH </h1>
        <g-sign-in @isLogin="$emit('isLogin', $event)"></g-sign-in>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>

import gSignIn from './GoogleSignIn'

export default {
    components: {
        gSignIn
    },
    data() {
        return {
        
        };
    },
    methods: {
        
    }
};
</script>

<style>
#landing {
  /* border: 1px solid red; */
  background-image: url("https://cdn.dribbble.com/users/1355613/screenshots/6533809/invoice_maker_2x.jpg");
  background-color: #FFFFFF;
  background-repeat: no-repeat;
  background-position: 95% 100%;
  background-size: 30%;
  height: 100vh;
}
#contentLanding {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  /* border: 1px solid green; */
}
#contentLanding h1{
    font-family: 'Indie Flower', cursive;
    font-weight: bold;
}
.columns {
  height: 100%;
}

</style>
