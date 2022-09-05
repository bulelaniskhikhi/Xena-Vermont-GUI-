<template>
    <!-- <div v-if="ratingproduct" style="padding-top: 20vh">
        <div >
            <span v-for="product in ratingproduct"
          :key="product">
              <p>{{product.title}}</p>
            </span>
        </div>
    </div> -->

    <!-- Landing products(all) -->
    <div class="container" style="padding-top: 3rem">
      <div class="row">
        <div
          id="holder"
          class="col-sm-12 col-md-6 col-lg-4"
          v-for="product in ratingproduct"
          :key="product"
        >
          <router-link
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

</template>

<script>
export default {
    mounted() {
        console.log("the shit works")
    this.$store.dispatch("getratingprod", this.$route.params.esrbRating);
  },
  computed: {
    ratingproduct() {
      return this.$store.state.ratingproduct;
    },
  }
}
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