<script lang="ts">
import { defineComponent, ref } from "vue";
import accesStorage from "../local_storage/storage";

import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";

const TodoList = defineComponent({
  name: "TodoList",
  components: {
    Header,
    SideBar,
    Footer,
    Card,
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
    <div class="not-done-list">
      <h2>You have ... activities to do</h2>
      <Card />
    </div>
    <div class="done-list">
      <h2>You're done doing ... activities</h2>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
$primary-color: rgb(0, 116, 0);
$roboto: "Roboto", sans-serif;
$secondary-color: #2c3e50;

.main-container {
  display: flex;

  .not-done-list,
  .done-list {
    width: 35vw;
    padding: 20px;
    overflow: auto;
    border: 0.1px solid gray;

    h2 {
      font-size: 20px;
      font: 100% $roboto;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>
