<template>
  <section class="container">
    <nuxt-link to="/student">跳转到student页面</nuxt-link>
    <button @click="jumpTo">跳转到car页面</button>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    jumpTo() {
      // this.$router.push({path: '/car'})
      // this.$router.push({name: 'car'})
      this.$router.push('/car')
    }
  }
}
</script>

<style>
</style>
