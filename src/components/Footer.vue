<template>
<div class="py-5">
        <span class="tex">Last updated: {{binCollection.last_updated}}</span>
      </div>
      <div>
        Created by <a href="https://stevendiffey.co.uk/products/bin-day" target="_blank" rel="noopener noreferrer" class="underline ">Steven Diffey
        </a>
      </div>
</template>

<script setup>

const props = defineProps(['binCollection'])


</script>
