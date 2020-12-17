<template>
  <b-container fluid>
    <b-row cols="3">
      <b-col>
        <profile>
          <user-form :loading="loading" :form="form" />
        </profile>
      </b-col>
      <b-col class="pl-0" cols="8">
        <profile-content :posts="posts" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Profile from "@/views/space/Components/Profile";
import UserForm from "@/components/user/UserForm";
import ProfileContent from "@/views/space/Components/ProfileContent/ProfileContent";

export default {
  name: "Space",
  components: { ProfileContent, UserForm, Profile },
  data: () => {
    return {
      loading: true,
      form: {
        name: "",
        surname: "",
        email: "",
        password: ""
      },
      posts: []
    };
  },
  mounted() {
    this.loadProfile();
    this.loadPosts();
  },
  methods: {
    async loadProfile() {
      let $this = this;
      await this.$axios("https://localhost:8001/user")
        .then(json => {
          $this.form = json.data.form;
        })
        .catch(e => {
          console.error(e.message);
        })
        .finally(() => {
          $this.loading = false;
        });
    },
    async loadPosts() {
      let $this = this;
      await this.$axios("https://localhost:8001/posts")
        .then(json => {
          $this.posts = json.data.posts;
        })
        .catch(e => {
          console.error(e.message);
        });
    }
  }
};
</script>
