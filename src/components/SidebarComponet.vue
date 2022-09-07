<template>
  <div
    class="offcanvas offcanvas-start offcanvas-show"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
    style="z-index: 4; background-color: black"
  >
    <div class="offcanvas-body" style="padding-top: 5rem">
      <ul>
        
        <!-- ESRD Fliter  -->
        <li style="margin-bottom: 20px;">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            style="decoration: none; color: red; font-weight: lighter; background: none; border: none"
          >
            ESRD
          </button>

          <div>
            <ul class="collapse-show" id="collapseExample">
              <li>
                <router-link to="/products/rating/T ~ Teen" >
                <button>
                  teen
                </button>
              </router-link>
              </li>
              
                <li>
                  <router-link to="/products/rating/M ~ Mature">
                <button>
                  mature
                </button>
              </router-link>
                </li>
              
                <li>
                  <router-link to="/products/rating/E ~ Everyone">
                <button>
                  everyone
                </button>
              </router-link>
                </li>
              
            </ul>
          </div>
        </li>

        <!-- Genre -->
        <li style="margin-bottom: 20px">
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2"
            style="decoration: none; color: red; font-weight: lighter; background: none; border: none"

          >
            Genre
          </button>

          <div>
            <ul class="collapse-show" id="collapseExample2">
              <li>Adventure</li>
              <li>Survival Horror</li>
              <li>Action</li>
              <li>First Person Shooter</li>
              <li>RPG</li>
            </ul>
          </div>
        </li>

        <!-- <li>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample3"
            aria-expanded="false"
            aria-controls="collapseExample3"
          >
            Developers
          </button>

          <div>
            <ul class="collapse" id="collapseExample3">
              <li>Yumekobo Co.</li>
              <li>Taito</li>
              <li>Human Entertainment</li>
              <li>Human</li>
              <li>Polygon Magic</li>
              <li>Bandai</li>
              <li>From Software, Inc</li>
              <li>From Liquid Mirror Software</li>
              <li>KEJ</li>
              <li>Atlus</li>
              <li>Takara</li>
              <li>Kalisto Technologies</li>
              <li>Riverhill Soft</li>
              <li>Squaresoft</li>
              <li>Infinity</li>
              <li>Capcom Production Studio 4</li>
              <li>KCET</li>
              <li>Cyberdreams</li>
              <li>Scitron & Art</li>
              <li>Vaill Co. Ltd.</li>
              <li>Victor Entertainment</li>
              <li>Unit Craze</li>
            </ul>
          </div>
        </li> -->

      </ul>
    </div>
    <hr>

    <!-- SideBar Footer  -->
    <div class="offcanvas-footer" style="padding-left: 16px; padding-right: 16px">
        <ul >
            <li>
                <router-link to="/login" style="text-decoration: none; ">
                <button id="loginbtn" style=" font-family: 'Gruppo', cursive; width: 70%; border: none">
         login/ Register
                </button>
                </router-link>
                
                
            </li>
            <li>
                <router-link to="/admin" style="text-decoration: none; ">
                <button id="adminbtn" >
         admin
                </button>
                </router-link>
            </li>
        </ul>
        
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  padding: 0;
}

#sideNav {
  color: red;
  z-index: 2;
}

#products {
  padding: 0;
}

a {
  color: white;
  text-decoration: none;
}

ul{
    list-style: none;
    padding-left: 50px;
}

li{
    color: red;
    font-weight: lighter;
}

#adminbtn{
  font-family: 'Gruppo', cursive;
  color: black; 
  background-color: red; 
  padding: 5px;
  width: 70%; 
  border: none; 
  margin-top: 1rem;

  transition: color, background-color 0.8s;
}

#adminbtn:hover{
  color: white;
  background-color: black;
}

#loginbtn {
  font-family: 'Gruppo', cursive;
  color: black; 
  background-color: red; 
  padding: 5px;
  width: 70%; 
  border: none; 
  margin-top: 1rem;

  transition: color, background-color 0.8s;
}

#loginbtn:hover{
  color: white;
  background-color: black;
}

button{
  background: none;
  color: red;
  font-weight: lighter;
}
</style>