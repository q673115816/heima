<template>
  <div class="index">news666</div>
</template>
<script>
import Vue from "vue";
import newsMixin from "@/mixins/news-mixin";
export default {
  name: "news",
  mixins: [newsMixin],
  data() {
    return {};
  },
  async created() {
    await this.NEWS_LIST();
    console.log(this.getNewsResponse);
  }
};
</script>
<style lang="scss" scoped>
.index {
  color: #ace;
  font-size: 64px;
}
</style>
