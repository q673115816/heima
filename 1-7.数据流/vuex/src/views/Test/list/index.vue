<template>
<ul class="list">
        <li v-for="(item, index) in list" :key="index" v-cloak>
          <router-link  :to="`test/${index}`" class="item-link">
              <box :item="item" :index="index"></box>
          </router-link>
        </li>
        <li class="item-load">
          load
        </li>
    </ul>
</template>

<script>
import box from '@/components/test'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      page: 1,
      type: 1,
      scrollEnd: null
    }
  },
  components: {
    box
  },
  computed: {
    ...mapState('test', ['list'])
  },
  methods: {
    ...mapActions('test', ['asyncgetData']),
    scrollBotton () {
      window.addEventListener('scroll', function () {
        this.scrollEnd = setTimeout(() => {
          let bottomwindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight
            // scrollTop滚动条的垂直位置，innerheight返回窗口的文档显示区的高度。
          // 返回该元素的像素高度,高度包含该元素的垂直内边距和边框,且是一个整数

          if (bottomwindow) {
            // 如果滚动最底部就变为true
            this.page++
            this.asyncgetData({ type: this.type, page: this.page })
          }
        }, 200)
      }.bind(this))
    }
  },
  created () {
    this.asyncgetData({ type: this.type, page: this.page })
  },
  mounted () {
    this.scrollBotton()
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 0 12px;
  max-width: 800px;
  margin: 0 auto;
}

.item-link {
    color: #000;
}

.item-load {
  font-size: 60px;
  color: #ace;
  text-align: center;
}
</style>
