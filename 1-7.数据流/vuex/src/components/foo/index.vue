<template>
  <div class="foo">
      <h2>foo</h2>
      <p>{{ num }}</p>
      <button @click="addNum()">加一</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'foo',
    computed: mapState({
        num: state => state.num
    }),
    methods: {
        addNum() {
            alert('Hello World')
        }
    }
};
</script>

<style>
</style>


