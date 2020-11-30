<template>
  <b-container>
    <b-row class="justify-content-center">
      <Logo />
    </b-row>
    <b-row class="justify-content-center mt-3">
      <TransitionLink />
    </b-row>
  </b-container>
</template>

<script>
import Logo from "@/views/homepage/Components/Logo";
import TransitionLink from "@/views/homepage/Components/TransitionLink";

export default {
  name: "Home",
  components: {
    TransitionLink,
    Logo
  }
};
</script>
