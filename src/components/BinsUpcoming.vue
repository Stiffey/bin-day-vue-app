<script setup>
import { ref, onMounted } from 'vue';

const binCollection = ref([])

const getBinDetails = async () => {
  const primaryTrainerResponse = await fetch("https://bin-day-api-kkz22a27ra-ew.a.run.app/all");
  binCollection.value = await primaryTrainerResponse.json()
}
getBinDetails()
</script>
<template>
    {{ binCollection }}
</template>