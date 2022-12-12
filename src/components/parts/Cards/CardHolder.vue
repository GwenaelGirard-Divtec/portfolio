<template>
    <div class="card-holder">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ContactCardHolder",

    props: {
        width: {
            type: String,
            required: false,
            default: "100%",
        },

        columnsTemplate: {
            type: String,
            required: false,
            default: "auto"
        },

        rowsTemplate: {
            type: String,
            required: false,
            default: "unset",
        },

        autoRows: {
            type: String,
            required: false,
            default: "unset",
        },

        gap: {
            type: String,
            required: false,
            default: "0",
        },
    },
}

</script>

<style lang="scss" scoped>
.card-holder {
    display: grid;
    grid-template-columns: v-bind(columnsTemplate);
    grid-template-rows: v-bind(rowsTemplate);
    grid-auto-rows: v-bind(autoRows);
    width: v-bind(width);
    gap: v-bind(gap);
}
</style>