<template>
    <div id="Coupons">
    <v-container>
        <v-row>
            <v-col>
                <!-- Add your coupon components or content here -->
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import { checkAuthAndRedirect } from "@/utils/auth";

export default {
    name: 'Coupons',
    data() {
        return {
            // Add your data properties here
        };
    },
    async created() {
        await checkAuthAndRedirect(this.$router);
    },
    methods: {
        // Add your methods here
    },
    computed: {
        // Add your computed properties here
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>