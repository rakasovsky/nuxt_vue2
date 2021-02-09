<template>
  <div id="app">
    <h3>{{ postsCount }}</h3>
    <div class="post" v-for="p in validPost" :key="p.id">
      <h2>{{ p.title }}</h2>
      <p>{{ p.body }}</p>
    </div>
     <PostForm />
  </div>
</template>

<script>
import PostForm from "./components/PostForm"
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    PostForm
  },

  computed: mapGetters(['validPost', 'postsCount']),

  methods: mapActions(['fetchPosts']),

  async mounted() {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts();
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.post {
  display: block;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 50%;
}
</style>
