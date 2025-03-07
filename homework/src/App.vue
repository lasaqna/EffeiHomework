// 5. App.vue
<template>
  <router-link to="/SignUp">Sign Up</router-link>
  <router-view></router-view>
  <Articles></Articles>
</template>

<script>
import SignUp from './components/SignUp.vue';
import Articles from './components/Articles.vue';

export default {
  name: 'App',
  components:{
    SignUp,
    Articles
  }
};
</script>
