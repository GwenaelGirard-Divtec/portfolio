<template>
    <nav ref="navbar">
        <div class="glass nav-container">
            <NavBtn v-for="component in this.getFilteredStructure" :component="component" />
        </div>
    </nav>
</template>

<script>
import { structure } from '@/datas/structure/structure';
import NavBtn from './parts/NavBtn.vue';

export default {
    name: "Navbar",
    components: { NavBtn },
    computed: {
        getStructure() {
            return structure;
        },
        getFilteredStructure() {
            return structure.filter(component => component.visible === true);
        },
        getRefs() {
            return this.$refs;
        }
    },
    methods: {
        scrollToAnchor(anchor) {
            let position = document.querySelector(`#${anchor}`).offsetTop;
            console.log(position);
            window.scrollTo(0, position - 75);
        },
    },
}

</script>

<style lang="scss" scoped>

nav {
    width: 100%;
    height: $navbar-height;
    position: sticky;
    top: 0;
    padding: 8px;
    display: flex;
    z-index: 10000;

    .nav-container {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        align-items: stretch;
        gap: 16px;
        padding: 10px;
    }
}

</style>