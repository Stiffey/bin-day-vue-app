<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-bold leading-6 text-orange-600 text-center">
                Upcoming collections
              </DialogTitle>
              <div class="my-5">
                <p class="text-sm text-slate-600">
                <div v-for="(value, key) in binCollectionAll" class="pb-3 flex">
                  <div class="flex w-8/12 items-center pr-3">
                    <span class="font-semibold text-base sm:text-lg">{{ formatDate(key) }}</span>
                  </div>
                  <div class="flex items-center">
                    <div v-for="bin in value" class="">
                      <div v-if="bin == 'black'">
                        <iconBin_sm binColor='black' />
                      </div>
                      <div v-if="bin == 'blue'">
                        <iconBin_sm binColor='#1e40af' />
                      </div>
                      <div v-if="bin == 'brown'">
                        <iconBin_sm binColor='brown' />
                      </div>
                    </div>
                  </div>
                </div>
                </p>
              </div>

              <div class="mt-4 text-center">
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                  @click="closeModal">
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
      <Title :binCollection=nextBinCollectionDate></Title>
      <div class="mx-auto max-w-xl pt-3">
        <bins :binCollection=upcomingBinCollection />
      </div>
      <div class="flex items-center justify-center mt-6">
        <button type="button" @click="openModal"
          class="rounded-md bg-slate-700 px-3 py-2 text-sm font-medium text-slate-100 hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
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
/*
  Imports
*/
import Title from './Title.vue'
import Footer from './Footer.vue'
import bins from './Bins.vue'
import iconBin_sm from './icons/iconBin_sm.vue'
import { ref, onMounted } from 'vue'
import {
    collection, limit,
    getDocs, query, orderBy
  }
  from 'firebase/firestore'
import { db } from '@/firebase'


/* 
  Data
*/
const binCollection = ref([]) // Raw data from Firestore
const binCollectionAll = ref([]) // Upcoming collections
const nextBinCollectionDate = ref(null); // Next collection date for title
const upcomingBinCollection = ref(null); // Date last updated

/*
Get the Firestore data with a query
*/
onMounted(async () => {
  const q = query(collection(db, "binUpdates"), orderBy("updated", "desc"), limit(1));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    binCollection.value = querySnapshot.docs[0].data();
  }
  getBinDetails()
  getUpcomingCollections()
}
)

// Get the next collection data
const getBinDetails = async () => {
  const nextCollection = binCollection.value.collections

  if (nextCollection) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Set the time to 00:00:00

    const futureDates = Object.keys(nextCollection)
      .map(date => new Date(date))
      .filter(date => date > today)
      .sort((a, b) => a - b);
      
      if (futureDates.length > 0) {
        const nextDate = futureDates[0];
        nextBinCollectionDate.value = formatDate(nextDate);
        upcomingBinCollection.value = nextCollection[nextDate.toISOString().split('T')[0]];  
      }
}}


const getUpcomingCollections = async () => {
  binCollectionAll.value = Object.fromEntries(
    Object.entries(binCollection.value.collections).sort()
  );
}


function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
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

</script>