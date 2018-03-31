<template>
<div class="ui basic segment">
<div class="ui four stackable cards">
<nuxt-link :to="{path: '/posts/' + post.id}" v-for="post in posts" v-bind:key="post.id" class="ui card">
  <div class="content">
    <div class="header">{{post.title}}</div>
    <div class="meta">2 days ago</div>
    <div class="description">
      <p>{{post.body}}</p>
    </div>
  </div>
</nuxt-link>
</div>
</div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.list;
    }
  },
  async asyncData({ store, params }) {
    await store.dispatch("posts/GET_POSTS");
  },
  head: {
    title: "Posts"
  }
};
</script>
