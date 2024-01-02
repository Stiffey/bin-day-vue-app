<template>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 text-center"
              >
                Upcoming collections
              </DialogTitle>
              <div class="my-5">
                <p class="text-sm text-gray-500">
                  <div v-for="(value, key) in binCollectionAll">
                    {{ key }}: {{ value }}
                  </div>
                </p>
              </div>

              <div class="mt-4 text-center">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div class="md:container mx-auto p-4 max-w-lg font-sans flex h-screen items-center">
    <div class="m-auto">
      <Title :binCollection=binCollection></Title>
      <div class="mx-auto max-w-xl pt-3">
        <bins :binCollection=binCollection />
      </div>
        <div class="flex items-center justify-center mt-6">
          <button
            type="button"
            @click="openModal"
            class="rounded-md bg-slate-700 px-3 py-2 text-sm font-medium text-slate-100 hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            View upcoming collections
          </button>
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
import { ref, onMounted } from 'vue'


const binCollection = ref([])
const binCollectionAll = ref()



const getBinDetails = async () => {
  const upcomingBinCollectionResponse = await fetch("https://bin-day-api-kkz22a27ra-ew.a.run.app");
  binCollection.value = await upcomingBinCollectionResponse.json()
}

const getUpcomingCollections = async () => {
  const upcomingBinCollectionResponseAll = await fetch("https://bin-day-api-kkz22a27ra-ew.a.run.app/all");
  // const upcomingBinCollectionResponseAll = await fetch("http://127.0.0.1:5000/all");
  binCollectionAll.value = await upcomingBinCollectionResponseAll.json()
}



import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}


await getBinDetails()
await getUpcomingCollections()

</script>