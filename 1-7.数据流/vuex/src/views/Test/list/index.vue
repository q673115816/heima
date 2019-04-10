<template>
<ul class="list">
        <li v-for="(item, index) in list" :key="index" v-cloak>
          <router-link  :to="`test/${index}`" class="item-link">
              <box :item="item" :index="index"></box>
          </router-link>
        </li>
    </ul>
</template>

<script>
import box from '@/components/test'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    box
  },
  computed: {
    ...mapState('test', ['list'])
  },
  methods: {
    ...mapActions('test', ['asyncgetData'])
  },
  created () {
    this.asyncgetData()
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
</style>
