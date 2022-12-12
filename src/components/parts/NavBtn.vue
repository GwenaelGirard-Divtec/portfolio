<template>
    <span
        class="nav-btn glass"
        :class="{ active: this.isThere }"
        @click="this.scrollToAnchor()"
    >
        {{ component.title }}
    </span>
</template>

<script>
import { structure } from "@/datas/structure/structure";

export default {
    name: "NavBtn",

    data() {
        return {
            positionTop: 0,
            positionBottom: 0,
            isThere: false,
        };
    },

    props: {
        component: {
            required: true,
        },
    },

    computed: {
        getFilteredStructure() {
            return structure.filter((component) => component.visible === true);
        },

        getStructure() {
            return structure;
        },
    },

    methods: {
        scrollToAnchor() {
            window.scrollTo(0, this.positionTop - 75);
        },

        testIfIsThere() {
            if (
                window.scrollY >= this.positionTop - 150 &&
                window.scrollY < this.positionBottom - 150
            ) {
                this.isThere = true;
            } else {
                this.isThere = false;
            }
        },

        setVariables() {
            //compensation pour la navbar
            let index = this.getStructure.indexOf(this.component);
            let compensation = 0;

            if (this.getStructure[index + 1].anchor === "navbar") {
                compensation = document.querySelector(
                    `#${this.getStructure[index + 1].anchor}`
                ).offsetHeight;
                console.log(compensation);
            }

            //Définition des bornes du composant
            this.positionTop =
                document.querySelector(`#${this.component.anchor}`).offsetTop +
                compensation;
            this.positionBottom =
                this.positionTop +
                document.querySelector(`#${this.component.anchor}`)
                    .offsetHeight;
            console.log(
                `${this.component.title} : top => ${this.positionTop} | Bottom => ${this.positionBottom}`
            );
        },
    },

    mounted() {
        setTimeout(() => {
            this.setVariables();
        }, 10);

        window.addEventListener("scroll", this.testIfIsThere);
        this.testIfIsThere();

        window.addEventListener("resize", this.setVariables);
    },

    beforeUnmount() {
        window.removeEventListener("scroll", this.testIfIsThere);
        window.removeEventListener("resize", this.setVariables);
    },
};
</script>

<style lang="scss" scoped>
.nav-btn {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: 100ms ease-in-out all;
    user-select: none;
    font-family: $heading-font;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
    }

    &.active {
        background: rgba(255, 255, 255, 0.4);
    }
}
</style>
