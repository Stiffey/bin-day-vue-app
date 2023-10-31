<template>
  <div class="flex no-wrap justify-center">
      <div v-if="binCollection.collecting == 'black'">
          <div class="rounded-full w-52 h-52 bg-white flex items-center place-content-around">
            <iconBin binColor='black' />
        </div>
      </div>
      <div v-else-if="binCollection.collecting == 'blue and brown'" class="flex flex-wrap justify-center">
        <div class="m-2 rounded-full w-52 h-52 bg-white flex items-center place-content-around">
            <iconBin binColor='#1e40af' />
        </div>
        <div class="m-2 rounded-full w-52 h-52 bg-white flex items-center place-content-around">
            <iconBin binColor='brown' />
        </div>
      </div>
      <div v-else>
        Uh-oh
      </div>
    </div>
</template>

<script setup>
import iconBin  from './icons/iconBin.vue'

const props = defineProps(['binCollection'])

</script>
