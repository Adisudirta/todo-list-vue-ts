<script lang="ts">
import { defineComponent } from "vue";

import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";

const TodoList = defineComponent({
  name: "TodoList",
  components: {
    Header,
    SideBar,
  },
});

export default TodoList;
</script>

<template>
  <Header />
  <div class="main-container">
    <SideBar />
  </div>
</template>

<style lang="scss">
.main-container {
  display: flex;
}
</style>
