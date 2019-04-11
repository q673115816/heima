<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test text='test'>
      slot
      {{name}}
    <template v-slot="template">
      <h1>v-slot</h1>
    </template>
    </test>
  </div>
</template>

<script>
import test from '@/components/abouttest'
export default {
  data () {
    return {
      name: 'qyqx'
    }
  },
  components: {
    test
  }

}
</script>
