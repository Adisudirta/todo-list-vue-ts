<script lang="ts">
import { defineComponent } from "vue";

import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import Footer from "../components/Footer.vue";

const TodoList = defineComponent({
  name: "TodoList",
  components: {
    Header,
    SideBar,
    Footer,
  },
  setup() {
    function handleActivity(val: any) {
      console.log(val);
    }

    return {
      handleActivity,
    };
  },
});

export default TodoList;
</script>

<template>
  <Header />
  <div class="main-container">
    <SideBar @addActivity="handleActivity" />
  </div>
  <Footer />
</template>

<style lang="scss">
.main-container {
  display: flex;
}
</style>
