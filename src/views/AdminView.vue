<template>
    <div class="container">
<div style="padding-top: 20vh; display: flex; justify-content: center">
<div id="header">
  ADMIN
</div>
  
</div>
<div style="display: flex; justify-content: center; gap: 5px; width: auto ">

<!-- <router-link >
  <button>Users</button>
</router-link>
    <router-link >
      <button>Products</button>
    </router-link> -->
   
          <button  style="width: 30%">
            add
          </button>

  </div>
<div class="table-responsive">
   <table class="table " style="margin-top: 5rem">
  <tbody v-if="products">
    <thead>
    <tr>
      <th colspan="">ID</th>
      
      <th colspan="2">Title</th>
      <th colspan="2">Romaji-Title</th>
      <th colspan="2">Kanji-Title</th>
      <th colspan="2">Back-Cover-Img</th>
      <th colspan="2">Front-Disc-Cover-Img</th>
      <th colspan="2">Back-Disc-Cover-Img</th>
      <th colspan="2">Realised-Date</th>
      <th colspan="2">Serial-Code</th>
      <th colspan="2">Studio-Dev</th>
      <th colspan="2">Studio-Pub</th>
      <th colspan="2">Price-Rands</th>
      <th colspan="2">Price-Yens</th>
      <th colspan="2">ESRD-Rating</th>
      <th colspan="2">ESRD-Rating-Img</th>
      <th colspan="2">Genre</th>
      <th colspan="2">Features</th>
      <th colspan="2">EDIT</th>
      <th colspan="2">DELETE</th>
    </tr>
  </thead>
<tbody>
  <tr v-for="product in products" :key="product" :product="product">

      <td colspan="" style="width: 5rem">{{product.id}}</td>
      <td colspan="2">{{product.title}}</td>
      <td colspan="2">{{product.romajiTitle}}</td>
      <td colspan="2">{{product.kanjiTitle}}</td>
      <td colspan="2"><img :src="product.backCoverImg" style="width: 5rem"></td>

      <td colspan="2"><img :src="product.frontDiscCoverImg" style="width: 5rem"></td>
      <td colspan="2"><img :src="product.backDiscCoverimg" style="width: 5rem"></td>
      
      <td colspan="2">{{product.realisedDate}}</td>
      <td colspan="2">{{product.serialCode}}</td>
      <td colspan="2">{{product.studioDev}}</td>
      <td colspan="2">{{product.studioPub}}</td>
      <td colspan="2">{{product.priceRands}}</td>
      <td colspan="2">{{product.priceYens}}</td>
      <td colspan="2">{{product.esrbRating}}</td>
      <td colspan="2"><img :src="product.esrbRatingImg" style="width: 5rem" ></td>
      <td colspan="2">{{product.genre}}</td>
      <td colspan="2">{{product.features}}</td>
      <td colspan="2">
          <button type="submit" style="width: 100%">
            EDIT
          </button>
      </td>
      <td colspan="2">
          <button type="submit" style="width: 100%">
            DELETE
          </button>
      </td>
    
    </tr>
</tbody>
    
  
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
    font-family: "Gruppo", cursive;
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
#header{
  color: red;
  font-family: "Gruppo", cursive;
  font-size: 2rem;
}
</style>