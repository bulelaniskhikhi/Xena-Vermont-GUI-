<template>
  <NavBarComponet/>
  <SideBarComponent/>
  <LandingView/>

</template>

<script>
import NavBarComponet from '@/components/NavBarComponent.vue'
import LandingView from '@/views/LandingView.vue'
import SideBarComponent from '@/components/SidebarComponet.vue'

export default {
  components: {NavBarComponet, LandingView, SideBarComponent}
}
</script>

<style>

</style>