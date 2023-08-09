<template>
    <div class="students">
      <span>Name: {{ student.name }}</span>
      <span>Surname: {{ student.surname }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { StudentItem } from '@/student'
  import { PropType } from 'vue'
  const props = defineProps({
    student: {
      type: Object as PropType<StudentItem>,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .students {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    margin-top: 20px;
    
  }
  </style>

