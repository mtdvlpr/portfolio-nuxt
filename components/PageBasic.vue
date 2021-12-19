<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-for="(card, i) in cards" :key="i" class="mb-4">
        <v-card-title class="headline">
          {{ card.title }}
        </v-card-title>
        <v-card-subtitle v-if="subtitle">
          {{ card.subtitle }}
        </v-card-subtitle>
        <v-card-text>
          {{ card.text }}
        </v-card-text>
        <v-card-actions>
          <slot name="actions" />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
}
</script>
