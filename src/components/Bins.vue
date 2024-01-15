<template>
  <div>
    <div v-if="binCollection" class="flex justify-center flex-wrap">
      <div v-for="bin in binCollection" class="p-2">
        <div v-if="bin == 'black'">
          <div class="rounded-full w-52 h-52 bg-white flex items-center place-content-around">
            <iconBin binColor='black' />
          </div>
        </div>
        <div v-if="bin == 'blue'">
          <div class="rounded-full w-52 h-52 bg-white flex items-center place-content-around">
            <iconBin binColor='#1e40af' />
          </div>
        </div>
        <div v-if="bin == 'brown'">
          <div class="rounded-full w-52 h-52 bg-white flex items-center place-content-around">
            <iconBin binColor='brown' />
          </div>
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
