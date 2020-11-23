<template>
  <b-container>
    <b-row cols="3" class="text-center">
      <InteractiveGridColumn />
      <InteractiveGridColumn />
      <InteractiveGridColumn />
      <InteractiveGridColumn />
      <InteractiveGridColumn />
    </b-row>
  </b-container>
</template>

<script>
import InteractiveGridColumn from "@/views/space/InteractiveGridColumn";

export default {
  name: "Space",
  components: { InteractiveGridColumn }
};
</script>
