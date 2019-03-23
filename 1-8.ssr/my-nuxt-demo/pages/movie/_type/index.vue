<template>
    <div class="movie-list">
        <div v-for="item in movieList" :key="item.id" class="movie-box">
          <nuxt-link :to="{path:'/movie/detail', query:{
            id: item.id,
            type
          }}" class="link">
            <img :src="item.img" :alt="item.title">
            <p>类型： {{item.genres.join(',')}}</p>
            <p>评分： {{item.rating}}</p>
          </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
      validate (params) {
        // console.log(params)
    // 必须是string类型
    return true
    // return !/^\d+$/.test(params.id)
  },
  async asyncData ({ app, params }) {
    const { type } = params
    con
    const {data} = await app.$axios({
      url:`http://localhost:3001/${type}`
    })
    
    return {
      movieList: data,
      type
    }
  },
  mounted() {
        // this.$axios.get("http://localhost:3001/in_theaters").then(res=>{
        //     console.log(res)
        // })
    },
}
</script>

<style scoped>
.movie-list {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.movie-box {
  width: 300px;
  margin: 10px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.movie-box:hover {
  box-shadow: 0 0 20px rgba(0,0,0,0.3)
}

.movie-box .link {
  color: #999;
}
</style>
