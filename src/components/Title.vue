<script setup>
const props = defineProps(['binCollection'])

</script>

<template>
      <div class="mx-auto max-w-xl pt-3">
        <h2 class="text-gray-300 text-center font-display">Bin collection</h2>
      </div>
      <div class="mx-auto max-w-xl pb-5">
          <h1 class="text-center font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 md: text-4xl lg:text-6xl">{{binCollection.date}}</h1>
      </div>
</template>