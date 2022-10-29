import {ref} from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore("User", ()=>{
    const user = ref({
        name:"admin",
        pass:"admin123",
    });
    const Chagename = (newname) =>{
        user.value.name = newname;
    }
    return{
        user,
        Chagename
    }
}); 
