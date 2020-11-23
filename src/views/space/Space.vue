<template>
  <b-container fluid>
    <b-row cols="3">
      <b-col>
        <Profile>
          <UserForm />
        </Profile>
      </b-col>
      <b-col class="foo" cols="8">
        <b-card>
          <b-nav tabs>
            <b-nav-item>A</b-nav-item>
            <b-nav-item>B</b-nav-item>
            <b-nav-item>C</b-nav-item>
          </b-nav>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Profile from "@/views/space/Profile";
import UserForm from "@/components/user/UserForm";

export default {
  name: "Space",
  components: { UserForm, Profile }
};
</script>
