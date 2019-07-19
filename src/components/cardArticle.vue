<template>
    <div class="card">
        <h4>id : {{article.id}}</h4>
        <h4>title : {{article.title}}</h4>
        <h4>desc: {{article.desc}}</h4>
        <button @click="deleteArticle">delete</button>
    </div>
</template>

<script>
export default {
    props: ["article"],
    methods : {
        deleteArticle(){
            //proses delete data
            

        }
    }
}
</script>

<style>
.card{
    border: 3px red solid;
    margin: 5px;
}
</style>
