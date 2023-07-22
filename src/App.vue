<script setup>
import Title from './components/Title.vue'
import { ref, onMounted } from 'vue';

const binCollection = ref([])
const binCollectionImage = ref([])

const binCollectionFunction = () => {
  if (binCollection.value.collecting == 'blue and brown'){
    // binCollectionImage.value = ["blue.png", "./brown.png"]
  }
  if (binCollection.value.collecting == 'black'){
    // binCollectionImage.value = ["black.png"]
  }
}


onMounted(async () => {
  const primaryTrainerResponse = await fetch("https://bin-day-api-kkz22a27ra-ew.a.run.app");
  // const primaryTrainerResponse = await fetch("http://127.0.0.1:5000/");
  binCollection.value = await primaryTrainerResponse.json()
  binCollectionFunction()
}
)


</script>

<template>
    <div class="md:container mx-auto p-4 max-w-lg font-sans">
      <div class="mx-auto max-w-xl pt-3">
        <h2 class="text-gray-300 text-center font-display">Bin collection</h2>
      </div>
      <div class="mx-auto max-w-xl pb-5">
        <!-- <Title :date="binCollection.date"/> -->
          <h1 class="text-center font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 md: text-4xl lg:text-6xl">{{ binCollection.date }}</h1>
      </div>
      <div class="flex no-wrap justify-center">
        <div v-if="binCollection.collecting == 'black'">
          <img src="./assets/black.png" alt="" width="200">
        </div>
        <div v-if="binCollection.collecting == 'blue and brown'" class="flex flex-wrap justify-center">
          <div>
            <img src="./assets/blue.png" alt="" width="200">
          </div>
          <div>
            <img src="./assets/brown.png" alt="" width="200">
          </div>
        </div>
        <div v-if="binCollection.collecting == 'blue and brown'">
          Uh-oh
        </div>
        

        <!-- <div v-for="collection in binCollectionImage">
          <img :src="collection" alt="" width="200">
        </div> -->
      </div>
      <!-- <div class="rounded-lg max-w-sm bg-slate-50 p-4 m-5 mx-auto">
        Steven Diffey created Bin Day so he could know what the collection was this week without having to check outside. It scrapes the East Herts website to get the data.
      </div> -->
      <div class="text-xs max-w-xl text-gray-300 mx-auto text-center">
        <div class="py-5">
          <span class="">Last updated: {{binCollection.last_updated}}</span>
        </div>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">About</a>
        </div>
      </div>
    </div>
</template>