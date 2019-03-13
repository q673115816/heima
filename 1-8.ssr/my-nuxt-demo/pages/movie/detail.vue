<template>
  <div>
    <div class="movie-box">
      <img :src="moviedetail.img" :alt="moviedetail.title">
      <p>电影： {{moviedetail.title}}</p>
      <p>类型： {{moviedetail.genres.join(',')}}</p>
      <p>评分： {{moviedetail.rating}}</p>
      <p>时间： {{moviedetail.details[0].year}}</p>
      <p style="margin-left: 30px;margin-right: 30px;">演员： {{moviedetail.details[0].summary}}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params, query }) {
    const { type } = params;
    const { data } = await app.$axios({
      url: `http://localhost:3001/${query.type}/${query.id}?_embed=details`
    });
    return {
      moviedetail: data
    };
  }
};
</script>

<style scoped>
.movie-box {
  margin: 30px auto;
  width: 500px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
</style>


