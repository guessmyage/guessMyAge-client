<template>
  <div id="home">
    <div class="columns">
      <div id="homeLeft" class="column is-4">
        <button class="button" @click="$emit('isLogin', false)">LOG OUT</button>
      </div>
      <div id="homeContent" class="column">
        <upload-file @image="getFile"></upload-file>

        <img v-if="image" :src="image" alt style="max-height:50%; border: darkgreen 5px solid;" />

        <!-- form submit guess age -->
        <form @submit.prevent="lockAge">
          <b-field>
            <b-input v-model="guessAge" v-if="!isLock" placeholder="Number" type="number" min="0" max="100"></b-input>
            <b-input v-model="guessAge" v-if="isLock" placeholder="Number" type="number" min="0" max="100" disabled></b-input>
          </b-field>
          <input class="button is-small" type="submit" value="LOCK AND GUESS !" />
        </form>
        <!-- Sharingbutton Twitter -->
        <a
          class="resp-sharing-button__link"
          :href="refTwitter"
          target="_blank"
          rel="noopener"
          aria-label="Share on Twitter"
        >
          <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large">
            <div
              aria-hidden="true"
              class="resp-sharing-button__icon resp-sharing-button__icon--solid"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
                />
              </svg>
            </div>Share on Twitter
          </div>
        </a>
      </div>
      <div class="column is-2"></div>
    </div>
  </div>
</template>

<script>
import uploadFile from "./uploadFile.vue";

export default {
  components: {
    uploadFile
  },
  data() {
    return {
      image: "",
      data_alternate: "",
      data_real: "",
      isLock: false,
      guessAge: 0,
      refTwitter : "https://twitter.com/intent/tweet/?text=i%20have%20play%20guess%20age%20on%20GUESS%20MY%20AGE%20app."
    };
  },
  methods: {
    lockAge() {
      if (!this.isLock) {
        console.log('this.data_real[0].faceAttributes.age: ', this.data_real[0].faceAttributes.age);
          console.log('this.guessAge: ', this.guessAge);
        if(Number(this.guessAge) === this.data_real[0].faceAttributes.age){
          // this.$swal(`answer: ${this.data_real[0].faceAttributes.age} congrats`);
          this.$swal({
            title: 'CONGRATS !',
            text: `the answer is: ${this.data_real[0].faceAttributes.age}`,
            type: 'success'
          });
        } else {
          // this.$swal(`answer: ${this.data_real[0].faceAttributes.age} sorry`);
          this.$swal({
            title: 'SORRY :(',
            text: `the answer is: ${this.data_real[0].faceAttributes.age}`,
            type: 'error'
          });
        }
      }
      this.isLock = !this.isLock;
    },
    getFile(value) {
      console.log('value: ', value);
      this.image = value.image;
      this.data_real = value.data;
      let ageData = `age:${value.data[0].faceAttributes.age}`
      console.log('ageData: ', ageData);
      this.refTwitter += `${value.image} ${ageData}`
      // debugger
    }
  }
};
</script>

<style scoped>
#home {
  /* border: 1px solid red; */
  background-image: url("https://cdn.dribbble.com/users/2791916/screenshots/6263377/skalmar.png");
  background-color: #d4f06c;
  background-repeat: no-repeat;
  background-position: 0% 50%;
  background-size: 30%;
  height: 102vh;
}
/* .column { */
/* border: 1px solid red; */
/* } */
#homeLeft {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
#homeLeft button {
  bottom: -21%;
  left: -1%;
  width: 50%;
  background-color: #cbe161;
  border: green 1px;
}
#homeContent {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block;
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.5em;
}

.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.resp-sharing-button__icon svg {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top;
}

.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle;
}

/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none;
}

/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
}

.resp-sharing-button--twitter:hover {
  background-color: #2795e9;
}

.resp-sharing-button--pinterest {
  background-color: #bd081c;
}

.resp-sharing-button--pinterest:hover {
  background-color: #8c0615;
}

.resp-sharing-button--facebook {
  background-color: #3b5998;
}

.resp-sharing-button--facebook:hover {
  background-color: #2d4373;
}

.resp-sharing-button--tumblr {
  background-color: #35465c;
}

.resp-sharing-button--tumblr:hover {
  background-color: #222d3c;
}

.resp-sharing-button--reddit {
  background-color: #5f99cf;
}

.resp-sharing-button--reddit:hover {
  background-color: #3a80c1;
}

.resp-sharing-button--google {
  background-color: #dd4b39;
}

.resp-sharing-button--google:hover {
  background-color: #c23321;
}

.resp-sharing-button--linkedin {
  background-color: #0077b5;
}

.resp-sharing-button--linkedin:hover {
  background-color: #046293;
}

.resp-sharing-button--email {
  background-color: #777;
}

.resp-sharing-button--email:hover {
  background-color: #5e5e5e;
}

.resp-sharing-button--xing {
  background-color: #1a7576;
}

.resp-sharing-button--xing:hover {
  background-color: #114c4c;
}

.resp-sharing-button--whatsapp {
  background-color: #25d366;
}

.resp-sharing-button--whatsapp:hover {
  background-color: #1da851;
}

.resp-sharing-button--hackernews {
  background-color: #ff6600;
}
.resp-sharing-button--hackernews:hover,
.resp-sharing-button--hackernews:focus {
  background-color: #fb6200;
}

.resp-sharing-button--vk {
  background-color: #507299;
}

.resp-sharing-button--vk:hover {
  background-color: #43648c;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
}

.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}
</style>
