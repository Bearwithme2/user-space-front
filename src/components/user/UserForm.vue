<template>
  <div>
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <UserFormSkeleton />
      </template>

      <b-form @submit="onSubmit">
        <b-form-group label-for="name" label="Name">
          <b-form-input
            id="name"
            placeholder="Enter name"
            v-model="form.name"
          />
        </b-form-group>
        <b-form-group label-for="surname" label="Surname">
          <b-form-input
            id="surname"
            placeholder="Enter surname"
            v-model="form.surname"
          />
        </b-form-group>
        <b-form-group label="Email" label-for="email">
          <b-form-input
            id="email"
            type="email"
            v-model="form.email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="w-50" label-for="password" label="Password">
          <b-form-input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="Change password"
          />
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-skeleton-wrapper>
  </div>
</template>

<script>
import UserFormSkeleton from "@/components/user/UserFormSkeleton";

export default {
  name: "UserForm",
  components: { UserFormSkeleton },
  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: "",
        password: ""
      },
      loading: true
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
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
