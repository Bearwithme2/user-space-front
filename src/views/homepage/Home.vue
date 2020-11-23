<template>
  <b-container>
    <b-row class="justify-content-center">
      <Logo />
    </b-row>
    <b-row class="justify-content-center mt-5">
      <TransitionLink />
    </b-row>
  </b-container>
</template>

<script>
import Logo from "@/views/homepage/Logo";
import TransitionLink from "@/views/homepage/TransitionLink";

export default {
  name: "Home",
  components: {
    TransitionLink,
    Logo
  }
};
</script>
