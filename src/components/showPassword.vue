<template>
    <div>
        {{arrayArticles}}
        <card v-for="(article, i) in arrayArticles" :key="i" :article="article"></card>
    </div>
</template>

<script>

import card from './cardArticle.vue'

export default {
    props : ["arrayArticles"],
    components: {
        card
    }
}
</script>

<style>

</style>
