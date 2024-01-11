<template>
  <div class="flex no-wrap justify-center">
    <div v-if="binCollection.collecting">
      <div v-if="binCollection.collecting == 'black'">
        <div class="rounded-full w-52 h-52 bg-white flex items-center place-content-around">
          <iconBin binColor='black' />
        </div>
      </div>
      <div v-if="binCollection.collecting == 'blue'">
        <div class="rounded-full w-52 h-52 bg-white flex items-center place-content-around">
          <iconBin binColor='#1e40af' />
        </div>
      </div>
      <div v-if="binCollection.collecting == 'brown'">
        <div class="rounded-full w-52 h-52 bg-white flex items-center place-content-around">
          <iconBin binColor='#brown' />
        </div>
      </div>
      <div v-if="binCollection.collecting == 'blue and brown'" class="flex flex-wrap justify-center">
        <div class="m-2 rounded-full w-52 h-52 bg-white flex items-center place-content-around">
          <iconBin binColor='#1e40af' />
        </div>
        <div class="m-2 rounded-full w-52 h-52 bg-white flex items-center place-content-around">
          <iconBin binColor='brown' />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-slate-50">
        Uh-oh.. Not sure what the bin collection is.
      </div>
    </div>
  </div>
</template>

<script setup>
import iconBin from './icons/iconBin.vue'

const props = defineProps(['binCollection'])

</script>
