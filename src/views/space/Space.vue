<template>
  <b-container fluid>
    <b-row cols="3">
      <b-col>
        <Profile>
          <UserForm :loading="loading" :form="form" />
        </Profile>
      </b-col>
      <b-col cols="8">
        <ProfileContent />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Profile from "@/views/space/Profile";
import UserForm from "@/components/user/UserForm";
import ProfileContent from "@/views/space/ProfileContent";

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
      }
    };
  },
  mounted() {
    this.loadProfile();
  },
  methods: {
    async loadProfile() {
      let $this = this;
      await this.$axios("https://localhost:8001/user", {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(json) {
          $this.form = json.data.form;
        })
        .catch(function(e) {
          console.error(e.message);
        })
        .finally(function() {
          $this.loading = false;
        });
    }
  }
};
</script>
