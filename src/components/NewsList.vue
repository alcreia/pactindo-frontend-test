<script setup lang="ts"></script>

<template>
  <div>
    <h1>News</h1>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="query"
          label="Search for a news topic..."
          required
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-select
          label="Select a Language..."
          :items="languages"
          item-value="value"
          item-title="text"
          density="comfortable"
          class="col-6"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          label="Select a Category..."
          :items="categories"
          item-value="value"
          item-title="text"
          density="comfortable"
          class="col-6"
        ></v-select>
      </v-col>
    </v-row>
  </div>
  <div class="news-container">
    <NewsCard
      v-for="news in newsData"
      :key="news.url"
      :url-to-image="news.urlToImage"
      :title="news.title"
      :author="news.author"
      :published-at="news.publishedAt"
      :description="news.description"
    />
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import testData from "../testData.json";

export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      newsData: [],
      languages: [
        { value: "ar", text: "Arabic" },
        { value: "de", text: "Deutsch" },
        { value: "en", text: "English" },
        { value: "es", text: "Español" },
        { value: "fr", text: "Français" },
        { value: "he", text: "Hebrew" },
        { value: "it", text: "Italian" },
        { value: "nl", text: "Nederlands" },
        { value: "no", text: "Norwegian" },
        { value: "pt", text: "Portuguese" },
        { value: "ru", text: "Russian" },
        { value: "sv", text: "Swedish" },
        { value: "zh", text: "中文" },
      ],
      categories: [
        { id: 1, value: "business", text: "Business" },
        { id: 2, value: "entertainment", text: "Entertainment" },
        { id: 3, value: "general", text: "General" },
        { id: 4, value: "health", text: "Health" },
        { id: 5, value: "science", text: "Science" },
        { id: 6, value: "sports", text: "Sports" },
        { id: 7, value: "technology", text: "Technology" },
      ],
      query: "",
      language: "",
      category: "",
    };
  },
  methods: {
    debounce(func, timeout = 800) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    },
    async getNews() {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?q=tesla&apiKey=34f9410a18cf435ca082d7d567154141"
      );
      const jsonData = await res.json();
      this.newsData = jsonData.articles;
    },
  },
  mounted() {
    this.newsData = testData.articles;
  },
};
</script>
<style scoped>
.news-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-evenly;
  gap: 0.75rem;
}
</style>
