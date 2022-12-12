<template>
    <div class="card" @click="this.goTo(contact.url)">
        <div class="img"></div>
        <span class="username title">{{ contact.username }}</span>
    </div>
</template>

<script>
export default {
    name: "ContactCard",

    computed: {
        getImage() {
            return `url(${require("@/assets/img/" + this.contact.img)})`;
        },
    },

    props: {
        contact: {
            type: Object,
            required: true,
        },
    },

    methods: {
        goTo(url) {
            window.open(url, "_blank");
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    background-color: darken($background, 3);
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 5px;

    * {
        transition: all 0.2s ease;
    }

    &:hover {
        background-color: $color;

        .img {
            transform: translateY(-24px);
            filter: grayscale(0) invert(0);
        }

        .username {
            bottom: 32px;
            opacity: 1;
        }
    }

    .img {
        height: 100px;
        width: 100%;
        margin-inline: 16px;
        background-image: v-bind(getImage);
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(1) invert(1);
    }

    .username {
        font-weight: 700;
        font-size: 1.5em;
        display: block;
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: -32px;
        color: $background;
        opacity: 0;
    }
}
</style>
