<template>
  <div id="app">
    <products></products>
    <hr>
    <cart></cart>
    <!-- <foo></foo>
    <hr>
    <bar></bar> -->
<div style="margin: 20px;">
      <h1>{{$t("message.title")}}</h1>
      <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
      <ul>
        <li v-for="(brand, index) in brands" :key="index">{{brand}}</li>
      </ul>
    </div>
    <select @change="trans()">
      <option v-for="(lang, index) in lang" :key="index" :value="lang">{{lang}}</option>
    </select>
<forms :type="'mobile'"></forms>
  </div>
</template>

<script>
import products from './components/products'
import cart from './components/cart'
// import foo from './components/foo'
// import bar from './components/bar'

import forms from './components/form'
export default {
  name: 'app',
  components: {
    forms,
    products,
    cart
    // foo,
    // bar
  },
  data () {
    return {
      message_title: this.$t('message.title'),
      brands: [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')],
      lang: this.$t('base.lang')
    }
  },
  methods: {
    trans (e) {
      console.log(e)
      localStorage.setItem('lang', 'en')
    }
  },
  created () {
    console.log(localStorage.getItem('lang'))
  }
}
</script>

<style>
</style>
