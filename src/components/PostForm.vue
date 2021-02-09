<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="Title" v-model="title">
        <input type="text" placeholder="Body" v-model="body">
        <button type="submit">Create Post</button>
    </form>
</template>


<script>
import { mapMutations } from 'vuex';

// export default {
//     methods: {
//         ...mapMutations([
//             'nameOfMutation', //also supports payload `this.nameOfMutation(amount)` 
//         ])
//     },
// };}
export default {
    data(){
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        ...mapMutations(['createPost']),
        submit() {
            this.createPost({
                title: this.title,
                body: this.body,
                id: Date.now() 
            });
            this.title = this.body = "";
        }
    }
}
</script>

<style scoped>
form { 
    width: 500px;
}
form * {
    margin: 10px 0;
}
input {
    display: block;
    width: 100%;
    min-height: 25px;
    border: 1px solid black
}
</style>
