<template>
  <div>
    <Navigation />
    <router-view class="mt-2" />
  </div>
</template>
<script>
import Navigation from "@/views/Navigation";

export default {
  components: { Navigation }
};
</script>
