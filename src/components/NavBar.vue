<template>
  <v-app-bar color="primary" dark flat>
    <v-container class="d-flex align-center justify-space-between">
      <h2 class="text-h6 font-weight-bold">Jibble Movie Finder</h2>

      <div class="d-flex align-center">
        <RouterLink to="/" class="nav-link" exact>Home</RouterLink>
        <RouterLink to="/favorites" class="nav-link">Favorites</RouterLink>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav-link {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-weight: 500;
  transition: opacity 0.2s ease;
}
.nav-link:hover {
  opacity: 0.8;
}
.router-link-active {
  text-decoration: underline;
}
</style>
