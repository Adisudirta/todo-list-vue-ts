<script lang="ts">
import { defineComponent, ref } from "vue";
import accesStorage from "../local_storage/storage";

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
    const todos = ref([]);

    function createTodoData(val: never) {
      todos.value = accesStorage("GET");
      todos.value.push(val);
      accesStorage("SET", todos.value);
    }

    return {
      createTodoData,
    };
  },
});

export default TodoList;
</script>

<template>
  <Header />
  <div class="main-container">
    <SideBar @addActivity="createTodoData" />
  </div>
  <Footer />
</template>

<style lang="scss">
.main-container {
  display: flex;
}
</style>
