<script lang="ts">
import { defineComponent } from "vue";

const TodoList = defineComponent({
  name: "TodoList",
});

export default TodoList;
</script>

<template>
  <header>
    <div class="logo-container">
      <img src="../assets/logo.png" alt="logo" />
      <h1>Vue - Todo</h1>
    </div>

    <div>
      <a href="https://github.com/Adisudirta/todo-list-vue-ts" target="_blank">
        About Repository
      </a>
    </div>
  </header>
</template>

<style scoped lang="scss">
$primary-color: rgb(0, 116, 0);
$roboto: "Roboto", sans-serif;
$secondary-color: #2c3e50;

header {
  align-items: center;
  color: $secondary-color;
  display: flex;
  font: 100% $roboto;
  height: 10vh;
  justify-content: space-between;
  padding: 0px 70px;
  position: fixed;
  width: 100%;

  .logo-container {
    align-items: center;
    display: flex;

    h1 {
      font-size: 25px;
    }

    img {
      margin-right: 10px;
      width: 40px;
    }
  }

  div a {
    color: $primary-color;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
