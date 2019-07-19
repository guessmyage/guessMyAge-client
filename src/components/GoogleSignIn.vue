<template>
  <div>
    <g-signin-button :params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError">
        <b-tooltip label="CLICK FOR LOGIN !" type="is-success" position="is-bottom" animated>
            <img src="https://www.freeiconspng.com/uploads/google-doodles-png-2.png" alt="wait..." />
        </b-tooltip>
    </g-signin-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      googleSignInParams: {
        client_id:
          "605598489197-blii6rdvko5m9kkkghfqmo9820t2ague.apps.googleusercontent.com"
      }
    };
  },
  methods: {
    onSignInSuccess(googleUser) {
        console.log('masuk');
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile(); // etc etc
      localStorage.setItem('token', googleUser.getAuthResponse().id_token)
      this.$emit('isLogin', true)
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log("OH NOES", error);
    }
  }
};
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #FFFFFF;
  color: black;
  width: 60%;
  cursor: pointer;
  /* box-shadow: 0 3px 0 white; */
  /* -webkit-transition: margin 1s ease-out;
  -moz-transition: margin 1s ease-out;
  -o-transition: margin 1s ease-out; */
   -webkit-transition:all 0.5s ease-out;
  -moz-transition:all 0.5s ease-out;
  -ms-transition:all 0.5s ease-out;
  -o-transition:all 0.5s ease-out;
  transition:all 0.5s ease-out;
}
.g-signin-button:hover{
    /* transform: scale(1.3); */
    /* cursor: pointer;
    margin-top: 5px; */
     -webkit-transform:scale(1.3);
  -moz-transform:scale(1.3);
  -ms-transform:scale(1.3);
  -o-transform:scale(1.3);
  transform:scale(1.3);
}
</style>
