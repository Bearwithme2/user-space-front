<template>
  <b-card no-body>
    <b-tabs card>
      <Posts :posts="posts" />
      <Friends />
      <Groups />
    </b-tabs>
  </b-card>
</template>

<script>
import Posts from "@/views/space/Components/ProfileContent/Posts";
import Friends from "@/views/space/Components/ProfileContent/Friends";
import Groups from "@/views/space/Components/ProfileContent/Groups";

export default {
  name: "ProfileContent",
  components: { Groups, Friends, Posts },
  props: {
    posts: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped></style>
