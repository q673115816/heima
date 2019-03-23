<template>
  <div class="movie-nav">
    <nuxt-link to="/movie/in_theaters" class="movie-link">正在热映</nuxt-link>
    <nuxt-link to="/movie/coming_soon" class="movie-link">即将到来</nuxt-link>
    <nuxt-link to="/movie/top250" class="movie-link">TOP250</nuxt-link>
  </div>
</template>

<style>
.movie-nav {
  display: flex;
}

.movie-link {
  flex: 1;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: #333;
  color: #ace;
}
</style>
