<template>
  <div class="Register">
    <h2>Register</h2>

    <form action="#">
      <div class="container">
         <label><b>Email: </b></label>
        <input type="text" placeholder="Email"  required />

         <label><b>Full name: </b></label>
        <input type="text" placeholder="Full name" required />

        <label><b>Username: </b></label>
        <input type="text" placeholder="Username" v-model="name" required />
        <span v-if="msg.name">{{ msg.name }}</span
        ><br />

        <label for="psw"><b>Password: </b></label>
        <input
          type="password"
          placeholder="Password"
          name="psw"
          v-model="password"
          required
        />
        <span v-if="msg.password">{{ msg.password }}</span>
        <br />
        <button type="submit" :disabled="isActive" @click="login">Login</button>
       
      </div>
         <h5>You have account ? click <router-link to="/login">Login</router-link> </h5>

    </form>
  </div>
</template>

<script>
export default {
  name: "REGISTER",
  props: {
    // msg: String
  },
  data() {
    return {
      name: "",
      password: "",
      msg: [],
    };
  },
  // computed: {
  //   isActive: function () {
  //     if (this.name == "admin" && this.password == "admin123") {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   },
  // },
  watch: {
    name(value) {
      this.name = value;
      this.validateEmail(value);
    },
    password(value) {
      this.password = value;
      this.validatepassword(value);
    },
  },
  methods: {
    validateEmail(value) {
      if (value.length < 1) {
        this.msg["name"] = "Username is required";
        this.isActive = true;
      } else if (value != "admin") {
        this.msg["name"] = "Username is incorrect";
        this.isActive = true;
      } else {
        this.msg["name"] = "";
        // this.isActive = false;
      }
    },
    validatepassword(value) {
      if (value.length < 1) {
        this.msg["password"] = "password is required";
        this.isActive = true;
      } else if (value != "admin123") {
        this.msg["password"] = "password is incorrect";
        this.isActive = true;
      } else {
        this.msg["password"] = "";
        this.isActive = false;
      }
    },
    isActive: function () {
      if (this.name == "admin" && this.password == "admin123") {
        return false;
      } else {
        return true;
      }
    },
    login() {
      // `this` inside methods points to the current active instance
      alert(`Username :  ${this.name}
    Password : ${this.password}!`);
      // `event` is the native DOM event
      console.log(this.name, this.password);

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<style scoped>
.Register {
  margin: 0 500px;
  /* border-radius: 1px;
  border: 1px solid gray ; */
  box-shadow: 5px 5px 10px rgb(199, 197, 197);
}
form {
  border: 3px solid #f1f1f1;
}

input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
h2 {
  text-align: center;
  padding-top: 50px;
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #ff0000;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
span {
  padding-top: 0px;
  margin-top: 0px;
  font-size: 12px;
  color: red;
}
/* button:hover {
  opacity: 0.8;
} */

button:disabled,
button[disabled] {
  opacity: 0.3;
}
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
</style>