<script setup lang="ts">
import { type EventItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
  event: Object as PropType<EventItem>,
  require: true
})
</script>

<template>
  <p>Registration from here</p>
</template>