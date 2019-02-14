<template>
  <div id="app">
    <foo></foo>
    <hr>
    <bar></bar>
  </div>
</template>

<script>
import foo from './components/foo'
import bar from './components/bar'
export default {
  name: 'app',
  components: {
    foo,
    bar
  }
}
</script>

<style>
</style>
