<template>
    <suspense>
      <template #default>
        <BinCollection/>
      </template>
      <template #fallback>
        <div class="md:container m-auto p-4 max-w-lg font-sans flex h-screen items-center justify-center animate-pulse">
          <h1 class="text-white">Wondering what the bin collection will be...</h1>
        </div>
      </template>
    </suspense>
</template>

<script setup>
import BinCollection from './components/BinCollection.vue'

</script>