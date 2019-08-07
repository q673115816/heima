<template>
  <div class="box">
    <div class="box-main">
      <p class="box-title">{{index + 1}} . {{item.text}}</p>
      <span>{{item.theme_name}}</span>
      <figure class="box-img">
        <img :src="item.cdn_img" alt>
      </figure>
      <div :if="item.videouri">
          点击查看视频
      </div>
    </div>
    <div class="div-footer">
      <p class="box-info">
        <span class="name">作者：{{item.name}}</span>
        <span class="time">时间：{{item.passtime}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true
    },
    index: Number
  }
}
</script>

<style lang="scss" scoped>

  .box {
    margin: 20px auto;
    border: 1px solid pink;
    border-radius: 6px;
    &:hover {
      box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
    }

    &-main {
      padding: 10px;
    }

    &-title {
      margin: 6px 0;
    }

    &-img {
        max-height: 300px;
        overflow: hidden;
    }

    &-info {
      padding: 10px;
      background-color: pink;
    }

    figure {
      img {
        max-width: 100%;
      }
    }

    video {
      max-width: 100%;
    }

    .name {
      font-size: 12px;
      color: #999;
    }

    .time {
      font-size: 12px;
      color: blue;
    }
  }
</style>
