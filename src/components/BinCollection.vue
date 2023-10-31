<template>
  <div class="md:container mx-auto p-4 max-w-lg font-sans flex h-screen items-center">
      <div class="m-auto">
        <Title :binCollection=binCollection></Title>
      <div class="mx-auto max-w-xl pt-3">
          <bins :binCollection=binCollection />
      </div>
      <div class="text-xs max-w-xl text-gray-300 mx-auto text-center">
        <Footer :binCollection=binCollection />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['binCollection'])
import Title from './Title.vue'
import Footer from './Footer.vue'
import bins from './Bins.vue'


import { ref, onMounted } from 'vue';

const binCollection = ref([])
// const binCollectionImage = ref([])

const binCollectionFunction = async () => {
  if (binCollection.value.collecting == 'blue and brown'){
    // binCollectionImage.value = ["blue.png", "./brown.png"]
  }
  if (binCollection.value.collecting == 'black'){
    // binCollectionImage.value = ["black.png"]
  }
}


const getBinDetails = async () => {
  const primaryTrainerResponse = await fetch("https://bin-day-api-kkz22a27ra-ew.a.run.app");
  // const primaryTrainerResponse = await fetch("http://127.0.0.1:5000/");
  binCollection.value = await primaryTrainerResponse.json()
}


await getBinDetails()
await binCollectionFunction()

</script>