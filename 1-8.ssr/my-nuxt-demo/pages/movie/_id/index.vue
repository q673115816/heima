<template>
    <div>
        <h2>_id</h2>
    </div>
</template>
<script>
export default {
      validate ({ params }) {
    // 必须是number类型
    console.log(params)
    return false
    // return /^\d+$/.test(params.id)
  }
}
</script>
