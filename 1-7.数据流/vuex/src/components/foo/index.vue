<template>
  <div class="foo">
    <h2>foo</h2>
    <h3>{{ $store.getters['foo/getName'] }}</h3>
    <h3>{{ name }}</h3>
    <p>{{ num }}</p>
    <p>{{ count }}</p>
    <p>{{ getPostsById && getPostsById[0] && getPostsById[0].title || null }}</p>
    <button @click="addNum()">加一</button>
    <button @click="increment({hello: 'hello'})">vuex</button>
    <button @click="syncIncrement(syncObj)">sync</button>
    <button @click="pop()">POP</button>
  </div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

export default {
  name: 'foo',
  data () {
    return {
      num: 0,
      syncObj: {
        helloSync: 'helloSync'
      }
    }
  },
  created () {
    console.log(this.$store)
  },
  computed: {
    ...mapState(['count']),
    ...mapState('foo', ['name']),
    ...mapGetters(['getPostsById'])
  },
  methods: {
    addNum () {
      this.num++
    },
    ...mapMutations([
      'increment'
    ]),

    // syncIncrement () {
    //   console.log(this.$store)
    //   this.$store.dispatch({
    //     type: 'syncIncrement',
    //     hello: 'hellosync'
    //   })
    // }
    ...mapActions([
      'syncIncrement'
    ]),
    ...mapActions({
      pop: 'syncPopPosts'
    })
  }
}
</script>

<style>
</style>
