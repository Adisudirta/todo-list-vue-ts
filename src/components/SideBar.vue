<script lang="ts">
import { defineComponent, ref } from "vue";

const SideBar = defineComponent({
  name: "SideBar",
  setup(props, context) {
    const activityName = ref("");
    const activityDesc = ref("");

    function addActivity() {
      context.emit("addActivity", {
        name: activityName.value,
        desc: activityDesc.value,
      });
    }

    return {
      activityName,
      activityDesc,
      addActivity,
    };
  },
});

export default SideBar;
</script>

<template>
  <section class="side-bar">
    <div>
      <label for="activity"> Activity: </label>
      <input
        v-model="activityName"
        placeholder="input your activity here!"
        type="text"
        id="activity"
      />
    </div>
    <div>
      <label for="desc"> Description: </label>
      <textarea
        v-model="activityDesc"
        placeholder="give your activity description here!"
        name="Description"
        id="desc"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <button @click="addActivity">+</button>
  </section>
</template>

<style scoped lang="scss">
$primary-color: rgb(0, 116, 0);
$roboto: "Roboto", sans-serif;
$secondary-color: #2c3e50;
.side-bar {
  font: 100% $roboto;
  font-weight: bold;
  background-color: $secondary-color;
  padding: 30px 50px 30px 70px;
  height: 85vh;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
      margin-bottom: 10px;
      color: gray;
    }

    input,
    textarea {
      padding: 10px 20px;
      border-radius: 10px;
      font-family: inherit;
    }
  }

  button {
    font-size: 40px;
    background-color: $primary-color;
    cursor: pointer;
    color: white;
    border: none;
    padding: 9px 20px;
    margin: auto;
    display: block;
    border-radius: 50%;
  }
}
</style>
