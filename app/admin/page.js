"use client"
import React, { useEffect, useState } from 'react'
import { useProductStore } from '../../store/product'
import { useToast } from "@/hooks/use-toast"
import { AdminProductTable } from '@/components/app-table'
import { AdminProductSheet } from '@/components/app-sheet'

const CreatePage = () => {

    const [newProduct,setNewProduct] = useState({
        name:"",
        price:"",
        image:"",
        category:"",
    })
    
    const {createProduct} = useProductStore()
    const { toast } = useToast()
    
    const handleAddProduct = async () =>{
        const {success,message} = await createProduct(newProduct)
        if(!success){
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
        }else{
            toast({
                title: "Successful.",
                description: "Product has been created.",
              })
            
        }
        setNewProduct({name:"",price:"",image:"",category:""});
    }





const {fetchProducts,products} = useProductStore();

useEffect (()=>{
  fetchProducts();
},[fetchProducts])

  return (
   <div>
    <div>Create New Product</div>
						<input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
						/>
                        <br/>
						<input
							placeholder='Price'
							name='price'
							type='number'
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
						/>
                        <br/>
						<input
							placeholder='Image URL'
							name='image'
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
						/>
                        <br/>
                        <input
							placeholder='Category'
							name='category'
							value={newProduct.category}
							onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
						/>
                        <br/>
						<button onClick={handleAddProduct}>
							Add Product
						</button>
                        <AdminProductSheet/>
                        <AdminProductTable data={products}/>
			</div>
  )
}

export default CreatePage