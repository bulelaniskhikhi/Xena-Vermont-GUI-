<template>
  <!-- manufacturer, bodystyle, model, modelyear, MSRP, fueltype, transmission, img -->
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-black">

        <div class="modal-header">

          <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>

          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>

        </div>

        <div class="modal-body">
          <form>
            <div class="row">

             <!-- titles -->
              <div class="col-md-6">

                <!-- title -->
                <div class="mb-3">

                  <label for="exampleInputPassword1" class="form-label">Titel :</label>

                  <input v-model="title" type="text" class="form-control" />

                </div>

                <!-- romajiTitle -->
                <div class="mb-3">

                  <label for="exampleInputPassword1" class="form-label">Romanji Titel :</label>

                  <input v-model="romajiTitle" type="text" class="form-control" />

                </div>

                <!-- kanjiTitle -->
                <div class="mb-3">

                  <label for="exampleInputPassword1" class="form-label">Kanji Titel :</label>

                  <input v-model="kanjiTitle" type="text" class="form-control" />

                </div>
              </div>

                <!-- images -->
              <div class="col-md-6">
                  
                  <!-- frontCoverImg -->
                <div class="mb-3">
                  <label class="form-label">Front Cover Image :</label>

                  <input v-model="frontCoverImg" type="text" class="form-control" />

                </div>

                <!-- backCoverImg -->
                <div class="mb-3">

                  <label class="form-label">Back Cover Image :</label>

                  <input v-model="backCoverImg" type="text" class="form-control" />
                </div>

                <!-- frontDiscCoverImg -->
                <div class="mb-3">

                  <label class="form-label">Front Disc Cover Image:</label>

                  <input v-model="frontDiscCoverImg" type="text" class="form-control" />
                </div>
                
                <!-- backDiscCoverimg -->
                <div class="mb-3">
                  <label class="form-label">Back Disc Cover image :</label>

                  <input v-model="backDiscCoverimg" type="text" class="form-control" />
                </div>

              </div>

                <!-- infomation -->
                <div class="col-md-6">
                  
                  <!-- realisedDate -->
                <div class="mb-3">
                  <label class="form-label">Realised Date :</label>

                  <input v-model="realisedDate" type="text" class="form-control" />

                </div>

                <!-- serialCode -->
                <div class="mb-3">

                  <label class="form-label">Serial Code :</label>

                  <input v-model="serialCode" type="text" class="form-control" />
                </div>

                <!-- frontDiscCoverImg -->
                <div class="mb-3">

                  <label class="form-label">Studio Dev :</label>

                  <input v-model="studioDev" type="text" class="form-control" />
                </div>
                
                <!-- backDiscCoverimg -->
                <div class="mb-3">
                  <label class="form-label">Studio Pub :</label>

                  <input v-model="studioPub" type="text" class="form-control" />
                </div>

              </div>

                <!-- prices  -->
              <div class="col-md-6">
                  
                  <!-- priceRands -->
                <div class="mb-3">
                  <label class="form-label">Price in Rands :</label>

                  <input v-model="priceRands" type="text" class="form-control" />

                </div>

                <!-- priceYens -->
                <div class="mb-3">

                  <label class="form-label">Price in Yens :</label>

                  <input v-model="priceYens" type="text" class="form-control" />
                </div>

              </div>

                <!-- game Description  -->
              <div class="col-md-6">
                  
                  <!-- gameDesc -->
                <div class="mb-3">
                  <label class="form-label">Game Description :</label>

                  <input v-model="gameDesc" type="text" class="form-control" />

                </div>

              </div>

               <!-- ERSB -->
              <div class="col-md-6">
                  
                  <!-- esrbRating -->
                <div class="mb-3">
                  <label class="form-label">ESRB Rating :</label>

                  <select class="form-select" v-model="esrbRating" name="fueltype" id="fueltype">

                    <option value="" disabled selected>Select your option</option>

                    <option value="M ~ Mature">Mature</option>

                    <option value="T ~ Teen">Teen</option>

                    <option value="E ~ Everyone">Everyone</option>

                  </select>

                </div>

                 <!-- esrbRatingImg -->
                <div class="mb-3">
                  <label class="form-label">ESRB Rating Image :</label>

                  <select class="form-select" v-model="esrbRatingImg" name="fueltype" id="fueltype">

                    <option value="" disabled selected>Select your option</option>

                    <option value="https://i.postimg.cc/BbXtN63t/Mature-ESRD-Rating.png">Mature</option>

                    <option value="https://i.postimg.cc/V67djt33/Teen-ESRD-Rating.png">Teen</option>

                    <option value="https://i.postimg.cc/cC2CzS1h/Everyone-ESRB-Rating.png">Everyone</option>

                  </select>

                </div>

              </div>

              <!-- other  -->
              <div class="col-md-6">
                  
                  <!-- genre -->
                <div class="mb-3">
                  <label class="form-label">genre :</label>

                  <input v-model="genre" type="text" class="form-control" />

                </div>

                <!-- features -->
                <div class="mb-3">

                  <label class="form-label">features :</label>

                  <input v-model="features" type="text" class="form-control" />
                </div>

              </div>

             

            </div>
          </form>
        </div>
        <div class="modal-footer" style="display: flex; justify-content: center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" @click="addProd" class="btn" data-bs-dismiss="modal">
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        title:" " ,
        romajiTitle: " ",
        kanjiTitle: " ",
        frontCoverImg: " ",
        backCoverImg: " ",
        frontDiscCoverImg: " ",
        backDiscCoverimg: " ",
        realisedDate: " ",
        serialCode: " ",
        studioDev: " ",
        studioPub: " ",
        priceRands: 0.00,
        priceYens: 0.00,
        gameDesc: " ",
        esrbRating: " ",
        esrbRatingImg: " ",
        genre: " ",
        features : " ",   
    };
  },
  methods: {
    addProd() {
      const payload = {
        title: this.title  ,
        romajiTitle: this.romajiTitle  ,
        kanjiTitle: this.kanjiTitle  ,
        frontCoverImg: this.frontCoverImg  ,
        backCoverImg: this.backCoverImg  ,
        frontDiscCoverImg: this.frontDiscCoverImg  ,
        backDiscCoverimg: this.backDiscCoverimg  ,
        realisedDate: this.realisedDate  ,
        serialCode: this.serialCode  ,
        studioDev: this.studioDev  ,
        studioPub: this.studioPub  ,
        priceRands: this.priceRands  ,
        priceYens: this.priceYens  ,
        gameDesc: this.gameDesc  ,
        esrbRating: this.esrbRating  ,
        esrbRatingImg: this.esrbRatingImg  ,
        genre: this.genre  ,
        features: this.features  ,
      };
      this.$store.dispatch("addproduct", payload);
    },
  },
};
</script>

<style scoped>
  .btn{
  background: red;
  width: 45%;
  color: black;
  margin-top: 2rem;
  border: none;
  font-family: "Gruppo", cursive;
  font-size: 1.2rem;
}

label{
    font-family: "Gruppo", cursive;
    color: red;
    font-size: 1.2rem;
}
h5{
    font-family: "Gruppo", cursive;
    color: red;
    font-size: 2rem;
}

.modal-header{
    display: flex;
    justify-content: center;
}
</style>