<template>
  <div>
    <h2>cart</h2>
    <p v-show="!cartProducts.length">Placse Add Product</p>
    <ul>
      <li v-for="item in cartProducts" :key="item.id">
        {{item.title}}
        -
        {{item.price}}
        *
        {{item.inventory}}
      </li>
    </ul>
    <p>total: {{cartTotal}}</p>
    <button @click="syncbuy()" :disabled="!cartProducts.length">Check out</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  state: {
    ...mapState('cart', ['checkoutStatus'])
  },
  computed: {
    ...mapGetters('cart', ['cartProducts', 'cartTotal'])
  },
  mothods: {
    ...mapActions('cart', ['syncbuy'])
  }
}
</script>
