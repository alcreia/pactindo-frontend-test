<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </nav>
  </header>
  <div class="content">
    <RouterView />
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.header {
  top: 0;
  width: 100vw;
  height: 80px;
  padding: 2rem;
}
.content {
  padding: 2rem;
  min-height: 90vh;
}
nav a {
  margin: 0 0.75rem;
}
</style>
