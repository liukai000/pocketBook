<template>
    <h1>首页</h1>
    {{myBook.name}}
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
    setup() {
        const myBook = reactive({
            name: 'nihao'
        })
        return {myBook}
    },
})
</script>
<style scoped>

</style>
