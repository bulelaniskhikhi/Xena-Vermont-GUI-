<template>

    <!-- <section class="collapse-show collapse-horizontal" id="collapseWidthExample">
        
        <div id="sideNav" class="flex-shrink-0 p-3" style="width: 350px; background-color: black; height: 100vh; color: red;">
    
    <ul class="list-unstyled" style="padding-top: 60px; padding-left: 95px">

      <li class="mb-1 ">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false" style="color: red">
          Home
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 ps-5 small">
            <li><a href="#" class="link rounded">Overview</a></li>
            <li><a href="#" class="link rounded">Updates</a></li>
            <li><a href="#" class="link rounded">Reports</a></li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true" style="color: red">
          Dashboard
        </button>
        <div class="collapse show" id="dashboard-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link rounded">Overview</a></li>
            <li><a href="#" class="link rounded">Weekly</a></li>
            <li><a href="#" class="link rounded">Monthly</a></li>
            <li><a href="#" class="link rounded">Annually</a></li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false" style="color: red">
          Orders
        </button>
        <div class="collapse show" id="orders-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link rounded">New</a></li>
            <li><a href="#" class="link rounded">Processed</a></li>
            <li><a href="#" class="link rounded">Shipped</a></li>
            <li><a href="#" class="link rounded">Returned</a></li>
          </ul>
        </div>
      </li>

      <div class="fixed-bottom">

          <li class="border-top my-3 " style="width: 350px"></li>

        <li class="mb-1" style="padding-left: 103px">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link rounded">New...</a></li>
            <li><a href="#" class="link rounded">Profile</a></li>
            <li><a href="#" class="link rounded">Settings</a></li>
            <li><a href="#" class="link rounded">Sign out</a></li>
          </ul>
        </div>
      </li>
      </div>
      
      

    </ul>
    
</div>
    </section> -->

    <div class="offcanvas offcanvas-start offcanvas-show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style="z-index: 4; background-color: black">
  <!-- <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div> -->
  <div class="offcanvas-body" style="padding-top: 5rem">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>

</template>

<script>
export default {
    
}
</script>

<style scoped>
section{
    padding: 0;
}

#sideNav{
    /* background-color: rgb(224, 224, 224);
    height: 200vh;
    padding: 0; */

    color: red;
    z-index: 2;
    /* position: absolute; */
    /* bottom: 0; */
}

#products{
    padding: 0;
}

a{
    color: white;
    text-decoration: none;
}


</style>