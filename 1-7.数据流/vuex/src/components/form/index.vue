<template>
    <div>
        <InputFactory
        v-for="item in inputList"
        :type="item"
        :key="item"
        :name="'login'"></InputFactory>
    </div>
</template>

<script>
import InputFactory from './inputFactory.vue'
const formMap = {
  login: ['username', 'password'],
  mobile: ['mobile', 'password'],
  email: ['email', 'password']
}
export default {
  props: ['type'],
  components: {
    InputFactory
  },
  computed: {
    inputList () {
      return formMap[this.type]
    }
  }
}
</script>
