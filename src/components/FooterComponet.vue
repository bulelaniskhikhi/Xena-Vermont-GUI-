<template>
  <div class="container" style="padding-top: 10vh">
    <footer class="py-3">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item" style="height: 100%; align-items: center">
          <router-link to="/" style="text-decoration: none; "><p style="color: red; padding: 8px">HOME</p></router-link>
        </li>
        <li class="nav-item" style="height: 100%; align-items: center">
          <router-link to="/login" style="text-decoration: none; "><p style="color: red; padding: 8px">LOGIN</p></router-link>
        </li>
      </ul>
      <p class="text-center text-muted">© 2021 𝚇𝚎𝚗𝚊 𝚟𝚎𝚛𝚖𝚘𝚗𝚝, Inc <strong style="display: block;
    -webkit-transform: rotate(180deg); 
    -moz-transform: rotate(180deg); 
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3); //For IE support">♱</strong>  </p>
    </footer>
  </div>
</template>

<style scoped>
p{
  color: red;

  font-family: 'Gruppo', cursive;
}
</style>