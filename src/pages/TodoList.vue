<script lang="ts">
import { defineComponent } from "vue";

import Header from "../components/Header.vue";

const TodoList = defineComponent({
  name: "TodoList",
  components: {
    Header,
  },
});

export default TodoList;
</script>

<template>
  <Header />
</template>
