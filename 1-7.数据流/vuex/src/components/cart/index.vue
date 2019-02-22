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
    <button @click="syncBUY()" :disabled="!cartProducts.length">Check out</button>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('cart', ['checkoutStatus']),
    ...mapGetters('cart', ['cartProducts', 'cartTotal']),
    msg () {
      return 'a'
    }
  },
  methods: {
    ...mapActions('cart', ['syncBUY'])
  }
}
</script>
