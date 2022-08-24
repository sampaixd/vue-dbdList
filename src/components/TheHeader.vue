<template lang="">
<header>
    <img alt="Vue logo" class="logo" src="../assets/SiggeSnygg.jpeg" width="125" height="125" />
    <h1>
        {{message}}
    </h1>
</header>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style scoped>
    h1 {
        display: flex;
        justify-content: center;
        color: red;
    }
    img:hover{
        width: 500px;
        height: 500px;

    }
</style>