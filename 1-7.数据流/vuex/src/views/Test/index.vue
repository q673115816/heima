<template>
  <div class="test">
    <h2 class="title">test</h2>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  color: #ace;
}
</style>
