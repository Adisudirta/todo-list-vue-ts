<script lang="ts">
import { defineComponent } from "vue";

const Card = defineComponent({
  name: "Card",
  props: {
    id: { type: String, default: "" },
    name: { type: String, default: "" },
    desc: { type: String, default: "" },
    status: { type: Boolean, default: false },
  },
  setup(props, context) {
    function handleDone() {
      context.emit("done", props.id);
    }
    function handleDelete() {
      context.emit("delete", props.id);
    }
    return {
      handleDone,
      handleDelete,
    };
  },
});

export default Card;
</script>

<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <span :class="{ done: status, notdone: !status }">
      Status: {{ status ? "already done" : "waiting to be done" }}
    </span>
    <p>
      {{ desc }}
    </p>
    <button @click="handleDone" v-if="status" class="btn-done">Done!</button>
    <button @click="handleDelete" v-if="!status" class="btn-delete">
      Delete
    </button>
  </div>
</template>

<style scoped lang="scss">
$primary-color: rgb(0, 116, 0);
$roboto: "Roboto", sans-serif;
$secondary-color: #2c3e50;

.card {
  box-shadow: 0px 25px 50px 0px #0000000d;
  font: 100% $roboto;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;

  .done {
    color: green;
  }

  .notdone {
    color: red;
  }

  h3 {
    margin-bottom: 5px;
  }

  span {
    display: inline-block;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
    color: rgb(128, 122, 122);
  }

  .btn-done,
  .btn-delete {
    border: none;
    padding: 10px;
    color: white;
    border-radius: 10px;
    display: block;
    margin: auto;
  }

  .btn-done {
    background-color: $primary-color;
    display: none;
  }

  .btn-delete {
    background-color: rgb(255, 4, 4);
  }
}
</style>
