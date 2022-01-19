<script lang="ts">
import { defineComponent } from "vue";

const Footer = defineComponent({
  name: "Footer",
});

export default Footer;
</script>

<template>
  <footer>
    <p>
      Create with &#128149; and &#128170; in Denpasar -
      <a href="https://github.com/Adisudirta" target="blank">
        By: Adi Sudirta
      </a>
    </p>
  </footer>
</template>

<style scoped lang="scss">
$primary-color: rgb(0, 116, 0);
$roboto: "Roboto", sans-serif;
$secondary-color: #2c3e50;

footer {
  background-color: rgb(0, 0, 0);
  height: 5vh;
  text-align: center;
  padding: 5px;

  p {
    color: white;
    font: 100% $roboto;

    a {
      color: $primary-color;
      text-decoration: none;
    }
  }
}
</style>
