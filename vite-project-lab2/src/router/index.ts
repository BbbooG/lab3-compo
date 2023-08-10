import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import OrganizerView from '../views/OrganizerView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetialView from '../views/EventDetialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: EventDetialView,
      props: true
    },
    {
      path: '/organizer',
      name: 'OrganizerView',
      component: OrganizerView
    },
    {
      path: '/students',
      name: 'StudentView',
      component: StudentView
    }
  ]
})

export default router
