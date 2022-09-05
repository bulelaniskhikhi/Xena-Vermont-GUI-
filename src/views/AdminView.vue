<template>
    <div class="container">


<div class="table-responsive">
   <table class="table " style="margin-top: 5rem">
  <tbody v-if="products">
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

    <tr v-for="product in products" :key="product" :product="product">

      <td>{{product.id}}</td>
      <td>{{product.title}}</td>
      <td>{{product.romajiTitle}}</td>
      <td>{{product.kanjiTitle}}</td>
      <td>{{product.kanjiTitle}}</td>
      <td><img :src="product.backCoverImg" style="width: 5rem"></td>

      <td><img :src="product.frontDiscCoverImg" style="width: 5rem"></td>
      <td><img :src="product.backDiscCoverimg" style="width: 5rem"></td>
      
      <td>{{product.realisedDate}}</td>
      <td>{{product.serialCode}}</td>
      <td>{{product.studioDev}}</td>
      <td>{{product.studioPub}}</td>
      <td>{{product.priceRands}}</td>
      <td>{{product.priceYens}}</td>
      <td>{{product.esrbRating}}</td>
      <td><img :src="product.esrbRatingImg" style="width: 5rem" ></td>
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
  <!-- Loading screen -->
  <div style=" height: 100vh; display: flex; justify-content: center; align-self: center;" v-else >
    <div style="display: flex; justify-content: center; align-self: center">

      <img src="https://i.postimg.cc/8z2PHmgR/tumblr-m8tg87y-Ee-J1r1rrxzo1-500.gif" style="width: 100%; height: auto"/>

    </div>
  </div>
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

tr{
  color: red;
  font-family: "Gruppo", cursive;;
}

button{
  background-color: red;
  color: black;
  padding: 5px;
  width: 70%; 
  border: none; 

  transition: color, background-color 0.8s;
}

button:hover{
  color: white;
  background-color: black;
}
</style>