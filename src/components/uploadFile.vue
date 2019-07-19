<template>
  <section>
    <b-field class="file">
        <b-upload id="imageFile" v-model="file">
            <a class="button">
                <b-icon icon="upload"></b-icon>
                <span v-if="!file">Click to upload</span>
                <span v-if="file">Click to re-upload</span>
            </a>
        </b-upload>
        <span class="file-name" v-if="file">
            {{ file.name }}
        </span>
    </b-field>
        <div v-if="loading" class="lds-ring"><div></div><div></div><div></div><div></div></div>
    
  </section>
</template>

<script>

import axios from '../api/axios'

export default {
  data() {
    return {
      file : '',
      loading : false
    };
  },
  methods: {
    
  },
  watch: {
      file : function(value){
        let formData = new FormData()
        formData.append('image', value)
        console.log('formData: ', formData);
        console.log(value, '====');
        // axios for image upload
        this.loading = true
        axios({
          url : '/recogs',
          method : 'POST',
          data : formData
        })
          .then(({data}) => {
            console.log('upload: ', data);
            this.loading = false
            this.$emit('image', data)
          })
          .catch(err => {
            console.log('err: ', err);

            this.loading = false
          })
        
      }
  }
};
</script>

<style scoped>
.button {
    background-color: #A5874E;
    color: aliceblue;
}
.file-name{
    border: green 1px solid;
    background-color: #CBE161;
    border: none;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
