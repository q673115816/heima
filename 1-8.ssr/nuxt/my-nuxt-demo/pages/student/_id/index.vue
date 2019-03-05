<template>
    <div>
        <p>这是{{$route.params.id}}号学生的id</p>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route)
    },
    validate(obj) {
        // console.log(obj)
        return /^\d+$/.test(obj.params.id)
    }
}
</script>
