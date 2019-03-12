<template>
    <div>
        <h2>_type</h2>
    </div>
</template>
<script>
export default {
      validate ({ params }) {
    // 必须是string类型
    console.log(params)
    return true
    // return !/^\d+$/.test(params.id)
  }
}
</script>
