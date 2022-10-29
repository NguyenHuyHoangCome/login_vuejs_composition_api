<template>
  <div>
    <label
      ><b>{{ label }} </b></label
    >
    <input
      :type="type"
      :placeholder="placehoder"
      v-model="loginInfor.username"
    
      required
    />
    <span v-if="msg.name">{{ msg.name }}</span>
  </div>
</template>


<script setup>
import { ref, reactive, watch, defineProps, defineEmits} from "vue";

// import { useRouter } from 'vue-router'
// const router = useRouter()
const emit = defineEmits(['change'])

const props = defineProps({
  label: String,
  placehoder:String,
  type:String,
})


const msg = ref([]);
const loginInfor = reactive({
  username: "",
});
watch(loginInfor, () => {
  msg.value = [];
  if (loginInfor.username == "" && props.type=="text") {
    msg.value["name"] = "Username is required";
  }
  if(props.type=="text"){
    emit('change',{
      vale: loginInfor.username,
      type : props.type})
  }
  else{
      emit('change',{
      vale: loginInfor.username,
      type : props.type})
  }
  if (loginInfor.username == "" && props.type=="password") {
    msg.value["name"] = "Password is required";
  }

});
</script>


<style>
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
span {
  padding-top: 0px;
  margin-top: 0px;
  font-size: 12px;
  color: red;
}
</style>