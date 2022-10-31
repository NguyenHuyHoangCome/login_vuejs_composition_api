<template>
<div>
   
    <h2>User Infor hihi hoho</h2>
   <ButTon>hihi</ButTon>
      <DataTable :value="cars" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>


</div>
   
</template>



<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


import  { useUserStore } from '@/stores/user';
import { ref,onMounted } from 'vue'

const store = useUserStore()

const cars = ref([])

onMounted(() => {
        cars.value = store.getCarsSmall()
        console.log(store.getCarsSmall())
        })

</script>
