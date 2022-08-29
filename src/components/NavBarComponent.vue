<template>
   <section>
       <div id="NavHolder" class="fixed-top">
           <div id="Navbar" class="container">
               <div id="Navbar-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" style="color: red">
                   Shop
               </div>

               <!-- <div class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                   Shop
               </div> -->

               <div id="Navbar-center">
                   Xena Vermont
               </div>

               <div id="Navbar-right">
                   right
               </div>
           </div>
       </div>
       
   </section>
   
    
</template>

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
    font-size: 1.5rem;
}

#Navbar-right{
    display: flex;
    justify-content: right;
}

#Navbar-left, #Navbar-center, #Navbar-right{
    vertical-align: center;
}

</style>