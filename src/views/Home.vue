<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="hello" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      hello: null
    };
  },
  async mounted() {
    await this.apiHello();
  },
  methods: {
    async apiHello() {
      let $this = this;
      await this.$axios("http://127.0.0.1:8000")
        .then(function(json) {
          $this.hello = json.data.hello;
        })
        .catch(function(e) {
          console.error(e.message);
        });
    }
  }
};
</script>
