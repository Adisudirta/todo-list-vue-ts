<script lang="ts">
import { defineComponent, ref } from "vue";
import accesStorage from "../local_storage/storage";

import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";

interface Todo {
  id: Number;
  name: string;
  desc: String;
  status: Boolean;
}

const TodoList = defineComponent({
  name: "TodoList",
  components: {
    Header,
    SideBar,
    Footer,
    Card,
  },
  setup() {
    const todos = ref<Todo[]>([]);
    const doneList = ref<Todo[]>([]);
    const notDoneList = ref<Todo[]>([]);

    todos.value = accesStorage("GET");
    notDoneList.value = todos.value.filter(
      (data: Todo) => data.status === false
    );
    doneList.value = todos.value.filter((data: Todo) => data.status === true);

    function createTodoData(val: Todo) {
      todos.value = accesStorage("GET");
      todos.value.push(val);
      accesStorage("SET", todos.value);

      notDoneList.value = todos.value.filter(
        (data: Todo) => data.status === false
      );

      doneList.value = todos.value.filter((data: Todo) => data.status === true);
    }

    function handleDone(val: Number) {
      todos.value.forEach((data: Todo) => {
        if (data.id === val) {
          data.status = true;

          accesStorage("SET", todos.value);
          todos.value = accesStorage("GET");
          notDoneList.value = todos.value.filter(
            (data: Todo) => data.status === false
          );
          doneList.value = todos.value.filter(
            (data: Todo) => data.status === true
          );
        }
      });
    }

    return {
      createTodoData,
      handleDone,
      doneList,
      notDoneList,
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
      <h2>You have {{ notDoneList.length }} activities to do</h2>
      <Card
        @done="handleDone"
        v-for="activity in notDoneList"
        :key="activity.id"
        :id="activity.id"
        :name="activity.name"
        :desc="activity.desc"
        :status="activity.status"
      />
    </div>
    <div class="done-list">
      <h2>You're done doing {{ doneList.length }} activities</h2>
      <Card
        v-for="activity in doneList"
        :key="activity.id"
        :id="activity.id"
        :name="activity.name"
        :desc="activity.desc"
        :status="activity.status"
      />
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
    height: 85vh;

    h2 {
      font-size: 20px;
      font: 100% $roboto;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>
