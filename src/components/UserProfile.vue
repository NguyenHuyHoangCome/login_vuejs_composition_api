<template>
	<!-- <div>
        <DataTable :value="products" responsiveLayout="scroll">
            <CoLumn field="id" header="id"></CoLumn>
            <CoLumn field="title" header="title"></CoLumn>
            <CoLumn field="description" header="description"></CoLumn>
            <CoLumn field="price" header="price"></CoLumn>
        </DataTable>
	</div> -->
        <div class="card">
            <h5>Vertical</h5>
            <DataTable :value="products" :scrollable="true" scrollHeight="400px" :loading="True">
                <Column field="id" header="id" style="min-width:200px"></Column>
                <Column field="title" header="title" style="min-width:200px"></Column>
                <Column field="brand" header="brand" style="min-width:200px"></Column>
                <Column field="category" header="category" style="min-width:200px"></Column>
                <Column field="description" header="description" style="min-width:200px"></Column>
                <Column field="price" header="price" style="min-width:200px"></Column>
            </DataTable>
        </div>
 

        <div class="card">
            <h5>Horizontal and Vertical with Footer</h5>
            <DataTable :value="products" :scrollable="true" scrollHeight="400px" :loading="loading" scrollDirection="both">
                <Column field="id" header="Id" footer="Id" style="width:100px"></Column>
                <Column field="title" header="title" footer="title" style="width:200px"></Column>
                <Column field="brand" header="brand" footer="brand" style="width:200px"></Column>
                <Column field="category" header="category" footer="category" style="width:200px"></Column>
                <Column field="description" header="description" footer="description" style="width:200px">
               
                </Column>
                <Column field="price" header="price" footer="price" style="width:200px"></Column>
               
            </DataTable>
        </div>

        
</template>

  
<script setup>
import { ref, onMounted } from 'vue';
import ProductService from '@/stores/serve';

const products = ref();
const productService = ref(new ProductService());
onMounted(() => {
        //     productService.value.getProductsSmall().then(data => products.value = data);
            productService.value.getProductsSmall().then(data => products.value = data.products);
            console.log(productService.value.getProductsSmall())
        })
</script>
   
