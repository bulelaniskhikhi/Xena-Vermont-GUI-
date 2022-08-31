<template>
    <div style=" padding-top: 20vh" >

    <div class="container" v-if="product">
    <div class="row" style="margin-bottom: 10rem">
                <div class="col-lg-6 col-sm-12 col-md-12" style="padding-bottom: 2rem">

                    <div style="display: flex; justify-content: center">

                        <img class="img-fluid" style="width:25rem; height: 25rem; z-index: 2   ;" :src="product.frontCoverImg">

                    </div>
                     
                <div>

                </div>
                   
                </div>
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <div style="display: flex; justify-content: center; color: red;" >
                        <div>
                            <h3>{{product.title}}</h3>
                            <p>Alternative Titles: {{product.romajiTitle}}, {{product.kanjiTitle}}</p>
                            <p>{{product.gameDesc}}</p>
                            <p>{{product.realisedDate}}</p>
                            <p>{{product.serialCode}}</p>
                            <p>{{product.studioDev}}</p>
                            <p>{{product.studioPub}}</p>
                            <p>{{product.priceRands}}</p>
                            <p>{{product.priceYens}}</p>
                            <p>{{product.esrbRating}}</p>
                            <img :src="product.esrbRatingImg" >
                        </div>

                    </div>
                  
                </div> 
    </div>

        <div class="row" style="margin-bottom: 5rem">
            <div class="col-12">
                <div style="display: flex; justify-content: center;">
                    <img class="img-fluid" :src="product.frontCoverImg">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div style="display: flex; justify-content: center; margin-bottom: 5rem">
                    <img class="img-fluid" :src="product.backCoverImg">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div style="display: flex; justify-content: center;">
                    <img id="disc" class="img-fluid" :src="product.frontDiscCoverImg">
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
/* #disc{
    z-index: 1;
    position: absolute;
    top: 30%;
    left: 33%;
    width: 20rem;
    height: 20rem;
    margin:-60px 0 0 -60px;
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
} */
</style>