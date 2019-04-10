<template>
    <div clas="testdetail">
        <div v-cloak v-if="item">
            {{item.text}}
            <figure>
                <img :src="item.cdn_img" alt="">
            </figure>
            <video v-if="item.videouri" :src="item.videouri" controls></video>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'testdetail',
  data () {
    return {
      index: null,
      item: null
    }
  },
  computed: {
    ...mapGetters('test', ['getItemByIndex'])
  },
  methods: {
    ...mapActions('test', ['asyncgetData'])
  },
  created () {
    this.index = this.$route.params.detail
    this.item = this.getItemByIndex(this.index)
    if (!this.item) {
      console.log(111)

      this.asyncgetData()
    }
  }
}
</script>
