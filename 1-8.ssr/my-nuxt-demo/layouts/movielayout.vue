<template>
<div class="movie-layout">
    <movienav></movienav>
    <nuxt/>
</div>
</template>
<script>
import movienav from '~/components/movienav'
export default {
    components: {
        movienav
    }

}
</script>
