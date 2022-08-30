<template>
<section style="background-color: black">
  <NavBarComponet/>
  <SideBarComponent/>
  <router-view/>
  <FooterComponet/>
</section>
  

</template>

<script>
import NavBarComponet from '@/components/NavBarComponent.vue'
import SideBarComponent from '@/components/SidebarComponet.vue'
import FooterComponet from '@/components/FooterComponet.vue'

import LandingView from '@/views/LandingView.vue'

export default {
  components: {NavBarComponet, LandingView, SideBarComponent, FooterComponet}
}
</script>

<style>

</style>