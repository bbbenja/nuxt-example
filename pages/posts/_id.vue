<template>
<div class="ui text container">
<div class="ui piled segment">
  <h4 class="ui header">{{post.title}}</h4>
  <p>{{post.body}}</p>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    post() {
      return this.$store.state.posts.post;
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch("posts/GET_POST", params.id);
  },
  head() {
    return {
      title: `Post : ${this.post.title}`
    };
  }
};
</script>

<style>
.text.container {
  margin: 2rem;
}
</style>
