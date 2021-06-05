<template>
  <div id="app">
    <b-container  class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="6"> <Customer /></b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
import Customer from "./components/Customer.vue";

export default {
  name: "App",
  components: {
    Customer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
