<template>
    <section class="contact">
        <h3>Contact</h3>

        <CardHolder
            class="contact-card-holder"
            columns-template="350px 350px 350px"
            auto-rows="200px"
            gap="16px"
        >
            <ContactCard v-for="contact in this.getContacts" :contact="contact" />
        </CardHolder>
    </section>
</template>

<script>
import CardHolder from "../parts/Cards/CardHolder.vue";
import ContactCard from "../parts/Cards/ContactCard.vue";

import contacts from '@/datas/contacts.json';

export default {
    name: "Contact",
    components: { CardHolder, ContactCard },

    computed: {
        getContacts() {
            return contacts;
        }
    }
};
</script>

<style lang="scss" scoped>
.contact-card-holder {
    width: max-content;
    margin-inline: auto;
    padding-block: 16px;
}
</style>
