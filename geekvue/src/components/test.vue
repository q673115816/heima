<template>
  <div>
    test
    <slot></slot>
    <slot name="qwer" v-bind:usr="user">
      {{ user.firstname }}
    </slot>
    <slot name="duv"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        lastname: "q",
        firstname: "w"
      }
    };
  }
};
</script>

<style></style>
