<template>
    <div style=" padding-top: 20vh" >

    <div class="container" v-if="product">
    <div class="row" style="margin-bottom: 5rem">
                <div class="col-lg-6 col-sm-12 col-md-12" style="padding-bottom: 2rem">

                    <div style="display: flex; justify-content: center">

                        <img class="img-fluid" style="width:27rem; height: 27rem; z-index: 2   ;" :src="product.frontCoverImg">

                    </div>
                   
                </div>
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <div style="display: flex; justify-content: center; color: red;" >
                        <div>
                            <h3 id="prodTitle">{{product.title}}</h3>
                            <p><strong>Alternative Titles: </strong><em>{{product.romajiTitle}}, {{product.kanjiTitle}}</em></p>
                            <p class="fw-light">{{product.gameDesc}}</p>
                            <div class="row">
                                <div class="col-6">
                                    <p><strong>Realise Date: </strong><em>{{product.realisedDate}}</em></p>
                                    <p><strong>Serial Code: </strong><em>{{product.serialCode}}</em></p>
                                    <p><strong>Developer: </strong><em>{{product.studioDev}}</em></p>
                                    <p><strong>Publisher: </strong><em>{{product.studioPub}}</em></p>
                                    <p><strong>Price: </strong><em>R{{product.priceRands}}</em></p>
                                    <p><strong>Price: </strong><em>¥{{product.priceYens}}</em></p>
                                    <p><strong>ESRD: </strong><em>{{product.esrbRating}}</em></p>
                                    <button id="cartbtn">
                                       <strong>Cart</strong> 
                                    </button>
                                </div>
                                <div class="col-6">
                                    <img :src="product.esrbRatingImg" style="width: 100%; height: 20rem" >
                                </div>
                            </div>
                            
                            
                        </div>

                    </div>
                  
                </div> 
    </div>
<div class="row" style="margin-bottom: 3rem; margin-top: 3rem">
     
<div class="col-lg-6 col-sm-12 col-md-12">
   <div class="book-container" >
  <div class="book">
    <img :src="product.frontCoverImg"/>
  </div>
</div> 
</div>

<div class="col-lg-6 col-sm-12 col-md-12" style=" display: flex;
  align-items: center;
  justify-content: center; margin-bottom: 5rem; padding: 30px">
    <img id="disc" class="img-fluid" style="height: 230px; width: auto" :src="product.frontDiscCoverImg">
</div>
</div>
   

        <div class="row" style="margin-bottom: 5rem">
            <div class="col-12">
                <div style="display: flex; justify-content: center;">
                    <img class="img-fluid" :src="product.frontCoverImg">
                </div>
                <div style="display: flex; justify-content: center;">
                        <p style="color: red"><em>Front Cover:</em></p>
                    </div>
            </div>
        </div>
        <div class="row" style="margin-bottom: 5rem">
            <div class="col-12">
                <div style="display: flex; justify-content: center;">
                    <img class="img-fluid" :src="product.backCoverImg">
                </div>
                <div style="display: flex; justify-content: center;">
                        <p style="color: red"><em>Back Cover:</em></p>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div style="display: flex; justify-content: center;">
                    <img class="img-fluid" :src="product.frontDiscCoverImg">
                </div>
            </div>
        </div>

    </div>
       
    </div>

   

</template>
<script>
export default {
 
    mounted(){
        this.$store.dispatch('fetchSingleProd', this.$route.params.id)
    },
    computed:{
        product(){
            return this.$store.state.product
        }
    }
}
</script>
<style scoped>
.book-container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 100%;
  margin-bottom: 5rem;
}

.book {
  transform: rotateY(-30deg);
  position: relative;
  transform-style: preserve-3d;
  width: 100%;
  height: 300px;
  transition: transform 1s ease;
  animation: 1s ease 0s 1 initAnimation;
  display: flex;
  align-items: center;
  justify-content: center;
}

.book:hover {
  transform: rotate(0deg);
}

@keyframes initAnimation {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-30deg);
  }
}

.book > :first-child {
  position: absolute;
 
  width: 15rem;
  height: 15rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  
}

.book::before {
  content: ' ';
  background: rgba(87, 87, 87, 0);
  height: calc(15rem - 2 * 3px);
  width: 40px;
  
  position: absolute;
  transform: translateX(calc(245px - 50px / 2 - 3px)) rotateY(90deg) translateX(calc(50px / 2));
  left: -400px;
}

.book::after {
  content: ' ';
  position: absolute;
  width: 15rem;
  height: 15rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background: black;
  transform: translateZ(-50px);
  box-shadow: -10px 0 50px 10px rgb(66, 66, 66);
  /* left: 200px; */
}

#prodTitle{
    font-family: 'Gruppo', cursive;
}

#cartbtn{
    text-decoration: none; 
    width: 100%; height: 2rem; 
    background-color: red; 
    color: black;
    border: none;

    font-family: 'Gruppo', cursive;
}
#disc{
    /* z-index: 1; */
    position: absolute;
    -webkit-animation:spin 8s linear infinite;
    -moz-animation:spin 8s linear infinite;
    animation:spin 8s linear infinite;
}
@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
</style>