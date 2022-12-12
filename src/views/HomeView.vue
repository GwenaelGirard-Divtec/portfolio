<template>
    <component v-for="component in getStructure"
                :is="component.component"
                :id="component.anchor"
                >
    </component>
</template>

<script>
import {structure} from '@/datas/structure/structure'

export default {
    name: "HomeView",

    computed: {
        getStructure() {
            return structure;
        }
    },

    methods: {
        getAnchor(component) {
            return component.anchor
        },
    }
};
</script>

<style lang="scss" scoped>
section.sec {
    height: 100vh;
}

.main {
    height: calc(32px * 10 + 2px);
}
</style>
