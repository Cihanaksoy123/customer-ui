<template>
  <div>
    <div v-if="error == 'loading_error'">Something wen wrong</div>
    <div v-if="error == null">
      <b-table hover :items="items"></b-table>
      <b-button style="float: right" variant="outline-primary" v-b-modal.modal-1
        ><p class="h5 mb-1 mt-1">Add <b-icon icon="plus-circle-fill" /></p
      ></b-button>
      <b-modal id="modal-1" title="Add Customer" hide-footer>
        <Form :method="addNewUser" />
      </b-modal>
    </div>
  </div>
</template>

<script>
import Form from "./Form";
import { getCustomers, addCustomer } from "../services/Api";
export default {
  components: { Form },
  name: "Customer",
  props: {
    msg: String,
  },
  data() {
    return {
      items: [],
      error: null,
    };
  },
  mounted() {
    getCustomers()
      .then((res) => {
        this.items = res;
      })
      .catch(() => (this.error = "loading_error"));
  },
  methods: {
    addNewUser(newCustomer) {
      //debugger; // eslint-disable-line no-debugger
      addCustomer(newCustomer)
        .then((res) => {
          if (res.data != 0) {
            newCustomer.id = res.data;
            this.items.push(newCustomer);
          } else {
            console.log("something went wrong!!!");
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
