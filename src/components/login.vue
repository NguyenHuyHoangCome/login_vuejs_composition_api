<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login">
    <h2>LOGIN</h2>

      <div class="container">
        <InputText label="Username:" placehoder="Username" type="text" v-on:change="test"></InputText>
        <br/>
        <InputText label="Password:" placehoder="Password" type="password"  v-on:change="test"></InputText>
        <span v-if="msg.password">{{ msg.password }}</span>
        <br/>
            <button type="submit" :disabled="!isValid"  @click="login">Login</button>
        <h5>
          You don't have account ? click
          <router-link to="/register">register</router-link> to create
        </h5>
      </div>
  </div>
</template>
<script>
export default {
  name:'LOGIN',
}
</script>
<script setup>
import InputText from './text_box/Input_text.vue';
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

import  { useUserStore } from '@/stores/user';
const store = useUserStore()

const router = useRouter()
const msg = ref([])
const loginInfor = reactive({
  username : "",
  password : ""
})
const isValid = computed(() => (loginInfor.username != "" && loginInfor.password != ""));
const test = (e)=>{

   if(e.type == "text"){
    loginInfor.username = e.vale
    console.log(loginInfor.username)
  }
  else{
    loginInfor.password = e.vale
    console.log(loginInfor.password)
  }
}
const login = ()=>{
  // console.log(loginInfor.username,loginInfor.password)
  alert(loginInfor.username,loginInfor.password)
  if(loginInfor.username == store.user.name && loginInfor.password == store.user.pass){
    router.push('UserProfile1');
  }
  else{
    msg.value["password"] = "Username or Password was wrong"
  }
}

</script>



<style scoped>
.login {
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