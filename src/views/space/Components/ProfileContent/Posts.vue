<template>
  <b-tab title="Posts">
    <div v-if="!areTherePosts" class="text-center">
      <b-spinner variant="secondary" label="Loading posts" />
    </div>
    <div v-else>
      <b-row
        cols="2"
        class="justify-content-center"
        v-for="post in posts"
        :key="post.id"
      >
        <b-col>
          <b-card class="mt-3" no-body>
            <b-card-header
              header-bg-variant="secondary"
              header-text-variant="white"
            >
              <p>{{ post.title }}</p>
            </b-card-header>
            <b-card-body>
              <p>{{ post.content }}</p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-tab>
</template>

<script>
export default {
  name: "Posts",
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    areTherePosts() {
      return this.posts.length > 0;
    }
  }
};
</script>

<style scoped>
.card {
  min-height: 20rem;
}

.spinner-border {
  width: 10rem;
  height: 10rem;
}
</style>
