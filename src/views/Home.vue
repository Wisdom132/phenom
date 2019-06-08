<template>
  <div>
    <homeheader />
    <homeabout />
    <homecatergory />
    <hometestimonials />
    <homebtutor />
  </div>
</template>

<script>
import homeheader from '@/components/home/homeheader.vue'
import homeabout from '@/components/home/homeabout.vue'
import homecatergory from '@/components/home/homecatergory.vue'
import hometestimonials from '@/components/home/hometestimonials.vue'
import homebtutor from '@/components/home/homebtutor.vue'
export default {
  name: 'home',
  components: {
    homeheader,
    homeabout,
    homecatergory,
    hometestimonials,
    homebtutor
  }
}
</script>
