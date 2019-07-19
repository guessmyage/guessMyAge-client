<template>
  <section>
    <b-field class="file">
        <b-upload id="imageFile" v-model="file">
            <a class="button">
                <b-icon icon="upload"></b-icon>
                <span>Click to upload</span>
            </a>
        </b-upload>
        <span class="file-name" v-if="file">
            {{ file.name }}
        </span>
    </b-field>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      file : ''
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
        value = 'hasil dari gcs'

        this.$emit('image', value)
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
</style>
