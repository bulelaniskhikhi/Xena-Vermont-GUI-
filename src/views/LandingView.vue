<template>

  <div v-if="products">

    <!-- landing Video -->
    <div style="display: flex; justify-content: center; overflow: hidden; padding-bottom: 3rem; padding-top: 3rem">

      <video src="../assets/mp4/landing.mp4" style="height: 666px; padding-top: 5vh" autoplay muted loop></video>

    </div>

    <!-- filter -->
    <div class="container" style="margin-top: 3rem">
      <div style="width: 100%; height: 3rem; background-color: red; display: flex; justify-content: center; align-items: center">
        filter
      </div>
    </div>

    <!-- Landing products(all) -->
    <div class="container" style="padding-top: 3rem">
      <div class="row">
        <div
          id="holder"
          class="col-sm-12 col-md-6 col-lg-4"
          v-for="product in products"
          :key="product"
        >
          <router-link
            id="prodLink"
            :to="{ name: 'product', params: { id: product.id } }"
          >
            <div
              class="card"
              style="border: none; border-radius: none; margin: 20px"
            >
              <img
                id="prodImg"
                :src="product.frontCoverImg"
                class="card-img-top img-fluid"
                style="width: 25rem; height: 25rem"
              />
            </div>
          </router-link>

          <p
            id="prodTitle"
            style="color: red; display: flex; justify-content: center"
          >
            {{ product.title }}
          </p>
        </div>
      </div>
    </div>

  </div>

  <!-- Loading screen -->
  <div style=" height: 100vh; display: flex; justify-content: center; align-self: center;" v-else >
    <div style="display: flex; justify-content: center; align-self: center">

      <img src="https://i.postimg.cc/8z2PHmgR/tumblr-m8tg87y-Ee-J1r1rrxzo1-500.gif" style="width: 100%; height: auto"/>

    </div>
  </div>

</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getprod");
  },
  computed: {
    products() {
      return this.$store.state.allprod;
    },
  },
};
</script>

<style scoped>
#prodTitle {
  font-family: "Montserrat", sans-serif;
  font-size: 1.15rem;
  opacity: 0;
  transition: opacity ease-in-out 0.2s;
}

#holder:hover #prodTitle {
  opacity: 1;
}
.card {
  background: rgba(255, 0, 0, 0);
}
</style>
