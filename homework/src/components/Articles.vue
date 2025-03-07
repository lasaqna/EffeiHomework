<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.name }} - {{ article.price }}円
      </li>
    </ul>
    <form @submit.prevent="addArticle">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required>
      </div>
      <div>
        <label for="description">Description:</label>
        <input type="text" v-model="description" id="description" required>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" v-model="price" id="price" required>
      </div>
      <button type="submit">Add Article</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { 
      articles: [],
      name: '',
      description: '',
      price: 0,
    };
  },
  async created() {
    const { data } = await axios.get('http://localhost:4000/articles');
    this.articles = data;
  },
  methods: {
    async addArticle() {
      const newArticle = {
        name: this.name,
        description: this.description,
        price: this.price,
      };
      await axios.post('http://localhost:4000/addArticle', newArticle);
      this.articles.push(newArticle);
      this.name = '';
      this.description = '';
      this.price = 0;
    }
  }
};
</script>
