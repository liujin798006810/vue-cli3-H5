<template>
    <div class="hello">
       {{msg}}
    </div>
</template>

<script>
    export default {
        name: 'hello',

        props: {
            msg: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped lang="scss">
.hello{
    font-size:32px;
}
</style>
