<template>
  <b-col @click="ring()" class="a">
    <b-icon
      variant="primary"
      font-scale="3"
      :icon="isRingFilled ? 'bell-fill' : 'bell'"
    />
  </b-col>
</template>

<script>
export default {
  name: "InteractiveGridColumn",
  data() {
    return {
      isRingFilled: false
    };
  },
  methods: {
    ring() {
      this.isRingFilled = this.isRingFilled === false;
    }
  }
};
</script>

<style scoped>
.col {
  padding: 5rem;
}

.a {
  background-color: #db2b39;
  border: #491217 1px solid;
}
</style>
