<template>
  <b-form @submit="onSubmit">
    <b-form-group id="input-group-1" label="name:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="form.name"
        type="name"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Your lastname:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.lastname"
        placeholder="Enter lastname"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="input-group-3"
      label="Phone Number:"
      label-for="input-3"
      style="margin-bottom: 20px"
    >
      <b-form-input
        id="input-3"
        v-model="form.phoneNumber"
        placeholder="Enter Phone Number"
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary" style="float: right"
      >Add</b-button
    >
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        lastname: "",
        phoneNumber: "",
      },
    };
  },
  props: {
    method: { type: Function },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.method({
        id: 65,
        name: this.form.name,
        lastname: this.form.lastname, //**** */
        phoneNumber: this.form.phoneNumber,
      });
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
  },
};
</script>