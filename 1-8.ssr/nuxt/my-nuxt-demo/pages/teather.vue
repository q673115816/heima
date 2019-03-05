<template>
    <div>
        <p>这是老师路由</p>
        <ul>
            <li v-for="item in teather" :key="item.id">
                <nuxt-link :to="`/teather/${item.id}`">{{item.name}}</nuxt-link>
            </li>
        </ul>
    <nuxt-child/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            teather: [
                {name: 'qwe', id: 1},
                {name: 'asd', id: 2},
                {name: 'zxc', id: 3},
            ]
        }
    }
}
</script>
