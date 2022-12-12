<template>
    <div class="moving-card glass-dark">
        <div class="moving-card-header">
            <h2>{{this.travail.title}}</h2>
            <p>{{this.travail.description}}</p>
        </div>
        <div class="moving-card-body">
            <div class="image-3d" ref="divImage"></div>
        </div>

        <div class="moving-card-footer">
            <div class="glass see-more-btn" @click="this.$router.push('/travaux/' + this.travail.id)">voir plus</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovingCard",

    props: {

        travail: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            x: 0,
            y: 0,

            mappedX: 0,
            mappedY: 0,
        };
    },

    computed: {
        getImage() {
            return `url(${require("@/assets/img/" + this.travail.cover)})`;
        },
    },

    methods: {
        enableMousemoveEventListener() {
            this.$refs.divImage.addEventListener("mousemove", this.set3d);
        },

        diseableMousemoveEventListener() {
            this.$refs.divImage.removeEventListener("mousemove", this.set3d);
            this.reset();
        },

        set3d(e) {
            this.$refs.divImage.style.transform =
                "rotateY(" +
                this.map(e.layerX, 0, 800, 1, -1) +
                "deg) rotateX(" +
                this.map(e.layerY, 0, 800, 1, -1) +
                "deg)";
        },

        map(value, in_min, in_max, out_min, out_max) {
            return (
                ((value - in_min) * (out_max - out_min)) / (in_max - in_min) +
                out_min
            );
        },

        reset() {
            this.$refs.divImage.style.transform = "rotateX(0deg) rotateY(0deg)";
        },
    },

    mounted() {
        setTimeout(() => {
            this.$refs.divImage.addEventListener(
                "mouseover",
                this.enableMousemoveEventListener
            );
            this.$refs.divImage.addEventListener(
                "mouseleave",
                this.diseableMousemoveEventListener
            );
        }, 10);
    },

    beforeUnmount() {
        this.$refs.divImage.removeEventListener(
            "mouseover",
            this.toggleMousemoveEventListener(true)
        );
        this.$refs.divImage.removeEventListener(
            "mouseleave",
            this.toggleMousemoveEventListener(false)
        );
    },
};
</script>

<style lang="scss" scoped>
.moving-card {
    border-radius: 10px;
    padding: 16px;
    margin-block: 16px;
    margin-inline: auto;
    width: min-content;
    .moving-card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .moving-card-body {
        position: relative;
        perspective: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        width: max-content;

        .image-3d {
            padding: 50px;
            height: 500px;
            aspect-ratio: 16/9;
            margin: 16px 64px 32px 64px;
            border-radius: 5px;
            overflow: hidden;
            background-image: v-bind(getImage);
            background-size: 100%;
            box-shadow: 0 0 0 darken($background, 2);
            transform-style: preserve-3d;
            transform: rotateX(0deg) rotateY(0deg);
            transition: all 0.2s ease;
            user-select: none;
            pointer-events: fill;
            z-index: 100;

            &:hover {
                box-shadow: 0 10px 20px darken($background, 5);
            }
        }
    }

    .moving-card-footer {

        height: 32px;
        display: flex;
        align-items: stretch;
        justify-content: center;
        margin-bottom: 16px;
        .see-more-btn {
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
    }
}
</style>
