<template>
  <b-card>
    <b-card-header header-bg-variant="primary" header-text-variant="white">
      <b-avatar icon="star" size="lg" />
      <span class="ml-2"> Username </span>
    </b-card-header>
    <b-card-body>
      <p>
        <strong>bio</strong>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar
        etiam non quam lacus suspendisse faucibus interdum. Turpis massa
        tincidunt dui ut ornare lectus sit amet.
      </p>
      <hr />
      <slot></slot>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped></style>
