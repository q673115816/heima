<template>
  <div id="app">
    <products></products>
    <hr>
    <cart></cart>
    <!-- <foo></foo>
    <hr>
    <bar></bar> -->
  </div>
</template>

<script>
import products from './components/products'
import cart from './components/cart'
// import foo from './components/foo'
// import bar from './components/bar'
export default {
  name: 'app',
  components: {
    products,
    cart
    // foo,
    // bar
  }
}
</script>

<style>
</style>
