<template>
    <div class="abouttest">
        <slot></slot>
        {{text}}
        <slot name="template"></slot>
    </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>

</style>
