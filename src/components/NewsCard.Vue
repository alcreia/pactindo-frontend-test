<script setup lang="ts">
const props = defineProps([
  "urlToImage",
  "title",
  "author",
  "publishedAt",
  "description",
]);
</script>

<template>
  <v-card width="400">
    <v-img :src="props.urlToImage" cover height="240"></v-img>
    <v-card-item>
      <v-card-title>{{ props.title }}</v-card-title>
      <v-card-subtitle>
        by {{ props.author }} // {{ props.publishedAt }}
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <p>{{ props.description }}</p>
    </v-card-text>
  </v-card>
</template>

<style>
.header-image {
  max-height: 180px;
  width: 240px;
  object-fit: contain;
}
.cards {
  display: flex;
  padding: 0.75rem;
  border: 1px solid #bbbbbb;
}
.news-image {
  display: flex;
}
.news-content {
  padding: 0 2rem;
  align-items: center;
}
</style>
