<template>
  <div>
    <div class="container" style="padding-top: 20vh">

    <div class="row">
      <div id="holder" class="col-sm-12 col-md-6 col-lg-4"  v-for="product in products" :key="product">

      <div class="card"  style=" border: none; border-radius: none; margin: 20px; ">
        <img id="prodImg" :src="product.frontCoverImg" class="card-img-top img-fluid" style="width: 25rem; height: 25rem" />
          
      </div>

<p id="prodTitle" style="color: red; display: flex; justify-content: center;">{{product.title}}</p>
      </div>
    </div>

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
  }
  };
</script>

<style scoped>
#prodTitle{
font-family: 'Montserrat', sans-serif;
font-size: 1.15rem;
opacity: 0;
transition: opacity ease-in-out 0.2s ;
}

#holder:hover #prodTitle{
 opacity: 1;
 
}

</style>
