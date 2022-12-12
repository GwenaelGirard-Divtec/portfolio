<template>
    <section class="hero">
        <h2>Gwenaël Girard</h2>
        <span class="subtitle">Photographe</span>
    </section>
</template>

<script>
export default {
    name: "Hero",
};
</script>

<style lang="scss" scoped>
section.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
    user-select: none;
}

h2 {
    font-size: 8em;
}

span.subtitle {
    font-size: 1.5em;
    font-weight: 300;
    margin-left: 10px;
}
</style>
