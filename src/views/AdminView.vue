<template>
    <div class="container">


<div class="table-responsive">
   <table class="table " style="margin-top: 5rem">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody v-if="products">
    <tr v-for="product in products" :key="product" :product="product">

      <td>{{product.id}}</td>
      <td>{{product.title}}</td>
      <td>{{product.romajiTitle}}</td>
      <td>{{product.kanjiTitle}}</td>
      <td>{{product.kanjiTitle}}</td>
      <td><img :src="product.backCoverImg" style="width: 3rem"></td>

      <td><img :src="product.frontDiscCoverImg" style="width: 3rem"></td>
      <td><img :src="product.backDiscCoverimg" style="width: 3rem"></td>
      
      <td>{{product.realisedDate}}</td>
      <td>{{product.serialCode}}</td>
      <td>{{product.studioDev}}</td>
      <td>{{product.studioPub}}</td>
      <td>{{product.priceRands}}</td>
      <td>{{product.priceYens}}</td>
      <td>{{product.esrbRating}}</td>
      <td><img :src="product.esrbRatingImg" style="width: 3rem" ></td>
      <td>{{product.genre}}</td>
      <td>{{product.features}}</td>
      <td>
          <button type="submit" style="width: 100%">
            EDIT
          </button>
      </td>
      <td>
          <button type="submit" style="width: 100%">
            DELETE
          </button>
      </td>
    </tr>

  </tbody>
</table>
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
}
</script>

<style scoped>
button {
    background: #000;
    width: 40%;
    color: white;
    margin-top: 2rem;
    border: none;
}
</style>