<template>
   <section>
       <div id="NavHolder" class="fixed-top">
           <div id="Navbar" class="container">
               <!-- <div id="Navbar-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" style="color: red">
                   Shop
               </div> -->

               <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" style="z-index: 5; font-size: 1rem" class="fw-light">
                   Shop
               </div>

               <div id="Navbar-center">
                   <router-link to="/" id="Logo">
                   Xena Vermont</router-link>
               </div>

               <div id="Navbar-right" class="fw-light">
<router-link v-if="user" to="/user" id="loginlink">

                       <i class="bi bi-person"></i>

                       </router-link>

                   <router-link v-else to="/login" id="loginlink">

                       <i class="bi bi-person"></i>

                       </router-link>

                       
                       
                    <div type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i class="bi bi-bag" id="chart">
                            
                        </i>
                    </div>
                  
               </div>
           </div>
       </div>
       
   </section>
   
    
</template>
<script>
export default {
    computed: {
        user(){
            return this.$store.state.user
        }
        
    }
}
</script>

<style scoped>
#NavHolder{
    height: 4rem;
    background-color: black;
    color: red;

    display: flex;
    justify-content: center;
    align-items: center;

}

#Navbar{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    
    vertical-align: middle;
}

#Navbar-left{
    display: flex;
    justify-content: start;
}

#Navbar-center{
    display: flex;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
}

#Navbar-right{
    display: flex;
    justify-content: right;
}

#Navbar-left, #Navbar-center, #Navbar-right{
    vertical-align: center;
    font-size: 1.2rem;
}

#Logo {
  text-decoration: none;
  color: red;
}
i{
    padding: 10px;
    font-size: 1.2rem;
}

#loginlink, #chart{
   text-decoration: none;
  color: red;
  
}
</style>