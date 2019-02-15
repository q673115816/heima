<template>
  <div class="foo">
    <h2>foo</h2>
    <p>{{ num }}</p>
    <p>{{ count }}</p>
    <button @click="addNum()">加一</button>
    <button @click="increment({hello: 'hello'})">vuex</button>
    <button @click="syncIncrement()">sync</button>
  </div>
</template>
<script>
import { 
  mapState, 
  mapMutations, 
  // mapActions 
  } from 'vuex'

export default {
  name: 'foo',
  data () {
    return {
      num: 0
    }
  },
  computed: mapState(['count']),
  methods: {
    addNum () {
      this.num++
    },
    ...mapMutations([
      'increment'
    ]),

    syncIncrement () {
      console.log(this.$store)
      this.$store.dispatch({
        type: 'syncIncrement',
        hello: 'hellosync'
      })
    }
  }
}
</script>

<style>
</style>
