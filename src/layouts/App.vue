<template>

 <div class="LayoutApp">
        <ul>
            <li>
                <div class="text-center">
                    <p>Admin</p>
                    <span class="text_small">admin@gmail.com</span>
                </div>
            </li>
            <li><a href="#view1" class="text_small">Go to view 1</a></li>
            <li><a href="#view2" class="text_small">Go to view 2</a></li>
            <li><a class="text_small" style="color: red" @click="toggleModal">Logout</a></li>
            
        </ul>

        <div style="margin-left:20%;padding:1px 16px;">
            <router-view/>
        
        </div>
        <Modal @close="toggleModal" :active="modalActive" title="SIGN OUT" message="Are you sure you want to sign out" acceptLabel="Accept" cancelLabel="Cancel">
          
        </Modal>
       
    </div>



</template>

<script>

import Modal from '@/components/modal.vue';


export default {
  name:'App',
   components: {
        Modal,
     
    },
}
</script>

<script setup>

import { ref } from 'vue';
let modalActive = ref(false);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
    console.log(modalActive.value)
}

</script>

<style>
.text_small {
    color: rgb(163, 161, 161);
}
.text-center {
    text-align: center;
    color: white;
    margin: 40px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 20%;
  background-color: #393838;
  position: fixed;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
ul > :last-child {
  margin-top: auto;
  margin-bottom: 30px;
  text-align: center;
  cursor: pointer;
}
li a {
  display: block;
  color: rgb(255, 255, 255);
  padding: 8px 16px;
  text-decoration: none;
}
li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
</style>

