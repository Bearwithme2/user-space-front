<template>
  <b-container>
    <div class="mb-3">
      <b-button @click="left">
        <b-icon icon="arrow-left" />
      </b-button>
      <b-button @click="right" class="ml-1">
        <b-icon icon="arrow-right" />
      </b-button>
      <b-button @click="up" class="ml-1">
        <b-icon icon="arrow-up" />
      </b-button>
      <b-button @click="down" class="ml-1">
        <b-icon icon="arrow-down" />
      </b-button>
    </div>
    <b-alert show>
      <div v-if="iconArray.length > 0">
        <b-row align-content="start">
          <b-col cols="1" v-for="(icon, index) in iconArray" :key="index">
            <b-icon :icon="icon" />
          </b-col>
        </b-row>
      </div>
      <div v-else>
        HELLO
      </div>
    </b-alert>

    <b-button @click="reset">
      RESET
    </b-button>
  </b-container>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      iconArray: []
    };
  },
  methods: {
    left() {
      this.iconArray.push("arrow-left");
    },
    right() {
      this.iconArray.push("arrow-right");
    },
    up() {
      this.iconArray.push("arrow-up");
    },
    down() {
      this.iconArray.push("arrow-down");
    },
    reset() {
      this.iconArray = [];
    }
  }
};
</script>
