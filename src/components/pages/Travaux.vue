<template>
    <section class="travaux">
        <h3>Travaux</h3>
        
        <MovingCard
            v-for="travail in this.getTravaux"
            :travail="travail"
        />

    </section>
</template>

<script>
import MovingCard from '../parts/Cards/MovingCard.vue';
import travaux from '@/datas/travaux.json'

export default {
    name: "Travaux",
    components: {
        MovingCard,
    },

    computed: {
        getTravaux() {
            return travaux
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
