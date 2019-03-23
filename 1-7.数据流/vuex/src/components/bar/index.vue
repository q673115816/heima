<template>
  <div class="bar">
    <h2>bar</h2>
    <p>{{ count }}</p>
    <button @click="syncIncrement()">++</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'bar',
  data () {
    return {
      name: 'bar'
    }
  },
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapActions([
      'syncIncrement'
    ])
  }
}
</script>

<style>
</style>
