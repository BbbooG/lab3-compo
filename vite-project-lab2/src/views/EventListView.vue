<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import EventOrganizer from '../components/EventOrganizer.vue'

import  type { EventItem } from '@/type';

import { computed, ref, watchEffect } from 'vue'

import EventService from '@/services/EventService'
import type { Axios, AxiosResponse } from 'axios';
const events: Ref<Array<EventItem>> = ref([])

const totalEvent = ref<number>(0)
const eventsPerPage = ref(2) //initial value of events
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

  EventService.getEvent(eventsPerPage.value, props.page).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
})

watchEffect(() => {
  EventService.getEvent(eventsPerPage.value, props.page).then(
    (response: AxiosResponse<EventItem[]>) => {
      events.value = response.data
      totalEvent.value = response.headers['x-total-count']
    }
  )
})

const hasNextPage = computed(() => {
  // first calculate the total page 
  const totalPages = Math.ceil(totalEvent.value / eventsPerPage.value)
  return props.page.valueOf() < totalPages
})
  
</script>

<template>
    <h1>Events For Good</h1>
  <main class="events">
    <div class="events-input">
      <label for="events-per-page">Events per page:</label>
      <input type="number" id="events-per-page" v-model.number="eventsPerPage" />
    </div>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="pagination">
    
      <RouterLink :to="{ name: 'EventList', query: {page: page - 1} }" rel="prev" v-if="page!= 1">
        Prev Page
      </RouterLink>
      <RouterLink :to=" { name: 'EventList', query: { page: page +1 } }" rel="next" v-if="hasNextPage">
        Next Page
      </RouterLink>

    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: blue;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
