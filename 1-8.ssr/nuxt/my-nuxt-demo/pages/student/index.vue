<template>
    <div>
        <p>这是学生路由</p>
        <ul>
            <li v-for="item in student" :key="item.id">
                <nuxt-link :to="`/student/${item.id}`">{{item.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    layout: 'header',
    data() {
        return {
            student: [
                {name: 'qwe', id: 1},
                {name: 'asd', id: 2},
                {name: 'zxc', id: 3},
            ]
        }
    }
}
</script>
