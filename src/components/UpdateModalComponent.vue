<template>
   <div
    class="modal fade"
    :id="'update' + product.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-black">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          
        </div>

        <div class="modal-body">
          <form>

            <div class="row">
                <!-- titles -->
              <div class="col-md-6">

                <!-- title -->
                <div class="mb-3">

                  <label for="exampleInputPassword1" class="form-label">Titel :</label>

                  <input v-model="product.title" type="text" class="form-control" />

                </div>

                <!-- romajiTitle -->
                <div class="mb-3">

                  <label for="exampleInputPassword1" class="form-label">Romanji Titel :</label>

                  <input v-model="product.romajiTitle" type="text" class="form-control" />

                </div>

                <!-- kanjiTitle -->
                <div class="mb-3">

                  <label for="exampleInputPassword1" class="form-label">Kanji Titel :</label>

                  <input v-model="product.kanjiTitle" type="text" class="form-control" />

                </div>
              </div>

                <!-- images -->
              <div class="col-md-6">
                  
                  <!-- frontCoverImg -->
                <div class="mb-3">
                  <label class="form-label">Front Cover Image :</label>

                  <input v-model="product.frontCoverImg" type="text" class="form-control" />

                </div>

                <!-- backCoverImg -->
                <div class="mb-3">

                  <label class="form-label">Back Cover Image :</label>

                  <input v-model="product.backCoverImg" type="text" class="form-control" />
                </div>

                <!-- frontDiscCoverImg -->
                <div class="mb-3">

                  <label class="form-label">Front Disc Cover Image:</label>

                  <input v-model="product.frontDiscCoverImg" type="text" class="form-control" />
                </div>
                
                <!-- backDiscCoverimg -->
                <div class="mb-3">
                  <label class="form-label">Back Disc Cover image :</label>

                  <input v-model="product.backDiscCoverimg" type="text" class="form-control" />
                </div>

              </div>

                <!-- infomation -->
                <div class="col-md-6">
                  
                  <!-- realisedDate -->
                <div class="mb-3">
                  <label class="form-label">Realised Date :</label>

                  <input v-model="product.realisedDate" type="text" class="form-control" />

                </div>

                <!-- serialCode -->
                <div class="mb-3">

                  <label class="form-label">Serial Code :</label>

                  <input v-model="product.serialCode" type="text" class="form-control" />
                </div>

                <!-- frontDiscCoverImg -->
                <div class="mb-3">

                  <label class="form-label">Studio Dev :</label>

                  <input v-model="product.studioDev" type="text" class="form-control" />
                </div>
                
                <!-- backDiscCoverimg -->
                <div class="mb-3">
                  <label class="form-label">Studio Pub :</label>

                  <input v-model="product.studioPub" type="text" class="form-control" />
                </div>

              </div>

                <!-- prices  -->
              <div class="col-md-6">
                  
                  <!-- priceRands -->
                <div class="mb-3">
                  <label class="form-label">Price in Rands :</label>

                  <input v-model="product.priceRands" type="number" class="form-control" />

                </div>

                <!-- priceYens -->
                <div class="mb-3">

                  <label class="form-label">Price in Yens :</label>

                  <input v-model="product.priceYens" type="number" class="form-control" />
                </div>

              </div>

                <!-- game Description  -->
              <div class="col-md-6">
                  
                  <!-- gameDesc -->
                <div class="mb-3">
                  <label class="form-label">Game Description :</label>

                  <input v-model="product.gameDesc" type="text" class="form-control" />

                </div>

              </div>

               <!-- ERSB -->
              <div class="col-md-6">
                  
                  <!-- esrbRating -->
                <div class="mb-3">
                  <label class="form-label">ESRB Rating :</label>

                  <select class="form-select" v-model="product.esrbRating" name="fueltype" id="fueltype">

                    <option value="" disabled selected>Select your option</option>

                    <option value="M ~ Mature">Mature</option>

                    <option value="T ~ Teen">Teen</option>

                    <option value="E ~ Everyone">Everyone</option>

                  </select>

                </div>

                 <!-- esrbRatingImg -->
                <div class="mb-3">
                  <label class="form-label">ESRB Rating Image :</label>

                  <select class="form-select" v-model="product.esrbRatingImg" name="fueltype" id="fueltype">

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

                  <input v-model="product.genre" type="text" class="form-control" />

                </div>

                <!-- features -->
                <div class="mb-3">

                  <label class="form-label">features :</label>

                  <input v-model="product.features" type="text" class="form-control" />
                </div>

              </div>

            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            @click="update"
            class="btn"
            data-bs-dismiss="modal"
          >
            Update product
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    update() {
      this.$store.dispatch("update", this.payload);
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