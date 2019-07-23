<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <div>
            <div
                class="list-item" 
                v-for="(item, index) in list" 
                :key="index"
            >
                {{item.d_title}}
            </div>
        </div>

        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>

        <div @click="loadMore">
            233333
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'

export default {
    name: 'home',

    components: {
        HelloWorld
    },

    data() {
        return {
            num: 1,
            pageSize: 10,
        }
    },

    computed: {
        list() {
            return this.$store.getters.list
        }
    },

    created() {
        this.$store.dispatch("getIndexList", {
            pageSize: this.pageSize,
            num: this.num
        })
    },

    methods: {
        loadMore() {
            this.num ++
            
            this.$store.dispatch("getIndexList", {
                pageSize: this.pageSize,
                num: this.num
            })
        },
    }
}
</script>

<style scoped>
    .list-item {
        font-size: 24px;
        margin-top: 15px;
    }
</style>

