<template>
    <footer>
        <div class="left">
            <span class="title">&copy; {{this.year}} Gwenaël Girard </span>
        </div>
        <div class="right"></div>
    </footer>
</template>

<script>
export default {
    name: "Footer",

    computed: {
        year() {
            return new Date().getFullYear();
        }
    }

}
</script>

<style lang="scss" scoped>
footer {
    height: 50px;
    background-color: darken($background, 5);
    padding-inline: 16px;
    display: flex;
    align-items: center;
}
</style>