<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>Contact Us</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Name" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Email" required></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea label="Message" required></v-textarea>
            </v-col>
            <v-col cols="12">
                <v-btn color="primary">Submit</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
h1 {
    margin-bottom: 20px;
}
</style>