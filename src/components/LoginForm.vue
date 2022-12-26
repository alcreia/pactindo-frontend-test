<script setup lang="ts">
function userLogin(e: Event) {
  e.preventDefault();
  console.log("Hehe");
}
</script>

<template>
  <v-container width="400">
    <v-form>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        label="Password"
        @click:append="show = !show"
      ></v-text-field>
      <v-btn @click="userLogin">
        Login
      </v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail must be valid",
      ],
      show: false,
    };
  },
  watch: {
    email(value) {
      this.email = value;
    },
  },
  methods: {
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        console.log("Invalid Email");
      } else {
        console.log("Valid Email");
      }
    },
  },
};
</script>

<style scoped>
</style>
