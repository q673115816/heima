<template>
  <div>
    <h2>products</h2>
    <ul>
        <li v-for="item in list" :key="item.id">
            {{ item.title }}
            -
            {{ item.price }}
            <button @click="syncAddProductToCart(item)" :disabled="!item.inventory">Buy</button>
        </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  created () {
    this.syncGetList()
  },
  computed: {
    ...mapState('products', ['list'])
  },
  methods: {
    ...mapActions('products', ['syncGetList']),
    ...mapActions('cart', ['syncAddProductToCart'])
  }
}
</script>
