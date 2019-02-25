<template>
    <component :is="comInput"></component>
</template>
<script>
import email from './input/email'
import mobile from './input/mobile'
import username from './input/username'
import password from './input/password'
const inputMap = {
  email,
  password,
  mobile,
  username
}
export default {
  props: ['name', 'status', 'type'],
  computed: {
    comInput () {
      return inputMap[this.type]
    }
  },
  components: inputMap
}
</script>
