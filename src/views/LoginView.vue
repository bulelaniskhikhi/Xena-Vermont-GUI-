<template>

  <div
    class="container"
    style="
      padding-top: 5rem;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <div
      id="box"
      style="display: inline-flex; flex-wrap: wrap; width: 100%; color: red"
    >
      <div id="Login">
        <form id="LoginForm" @submit.prevent="login">
          <div id="LoginFormTitle">
            <h3>LOGIN</h3>
          </div>
          <div>
            <label for="" class="fw-light">EMAIL</label>
            <br />
            <input v-model="userEmail" type="email" required />
          </div>

          <br />

          <div>
            <label for="" class="fw-light">PASSWORD</label>
            <br />
            <input id="loginpassword" v-model="userPassword" type="password" required />
          
          </div>

          <div>
            <button type="submit" style="width: 100%">LOGIN</button>
          </div>
        </form>
      </div>

      <div id="Register">
        <form @submit.prevent="register" id="RegisterForm">
          <div id="RegisterFormTitle">
            <h3>REGISTER</h3>
          </div>

          <div>
            <label for="" class="fw-light">USERNAME</label>
            <br />
            <input v-model="userNAme" type="text" required />
          </div>

          <br />

          <div>
            <label for="" class="fw-light">EMAIL</label>
            <br />
            <input v-model="userEmailReg" type="email" required />
          </div>

          <br />

          <div>
            <label for="" class="fw-light">PASSWORD</label>
            <br />
              <input v-model="userPasswordReg" type="password" required> 
              
          </div>
        
          <div>
            <button type="submit" style="width: 100%">CREATE</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      userEmail: null,
      userPassword: null,
      userName: null,
      userRole: "user",

       userEmailReg: null,
      userPasswordReg: null,
    };
  },
  methods: {
    login() {
      return this.$store.dispatch("login", {
        userEmail: this.userEmail,
        userPassword: this.userPassword,
      });
    },
    register() {
      return this.$store.dispatch("register", {
        userEmail: this.userEmailReg,
        userPassword: this.userPasswordReg,
        userRole: this.userRole,
        userName: this.userName
      });
    },
   
  },

  // computed: {
  //   user(){
  //     return this.$store.state.
  //   }
  // }
};
</script>
<style scoped>

#LoginForm {
}

#Login {
  width: 30%;
}

#Register {
  width: 30%;
}

#RegisterForm {
}

#LoginFormTitle,
#RegisterFormTitle {
  margin-bottom: 3rem;
  font-family: "Gruppo", cursive;
}

input {
  border: solid 2px red;
  width: 100%;
  color: red;
  font-family: "Gruppo", cursive;
  background: black;
}
input:focus{
  background-color: black;
}
button {
  background: red;
  width: 40%;
  color: black;
  margin-top: 2rem;
  border: none;
  font-family: "Gruppo", cursive;
  padding: 0.3rem;

  transition: color, background-color 0.8s; 
}

button:hover{
    color: red;
    background-color: black;
}

input:focus {
  outline: none;
  box-shadow: none;
}

label {
  margin-bottom: 5px;
  font-family: "Gruppo", cursive;
}

#box > * {
  flex: 1 1 180px;
  margin: 40px;
}
</style>