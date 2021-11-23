<template>
  <b-card :title="title">
    <!-- <b-icon icon="exclamation-triangle-fill" scale="1.5" variant="warning"></b-icon>-->
    <h2 v-if="textLarge" class="card-title">{{ textLarge }}</h2>
    <b-card-text v-if="text">{{ text }}</b-card-text>
    <b-card-text class="italic" v-if="textItalic">{{ textItalic }}</b-card-text>
  </b-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    'text-large': {
      type: String,
      default: ''
    },
    'text-italic': {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
p.card-text.italic {
  font-style: italic;
  font-size: 1.1rem;
}
</style>
