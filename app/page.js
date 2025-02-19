'use client'
import { AppNavBar } from "@/components/app-navigation";
import { CarouselPlugin } from "@/components/carousel";
import { AppPopOver } from "@/components/popover";
import Image from "next/image";
import { useProductStore } from '../store/product'
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const {fetchProducts,products} = useProductStore();
  useEffect (()=>{
    fetchProducts();
},[fetchProducts])
console.log("products",products)
  return (
    <>
    <CarouselPlugin/>
    <br/>
    <br/>
    <br/>
    {products.map((product) => (
						// <ProductCard key={product._id} product={product} />
            <div key={product._id}>{product._id}</div>
					))}

          {products.length === 0 && (
            <div>
					<h3 className="font-bold text-center text-gray-500 text-xl">
						No products found 😢{" "}
            </h3>
						<Link href={"/admin"}>
							<h4 className="text-blue-500 hover:underline">
								Create a product
							</h4>
						</Link>
            </div>
				)}
    </>
  );
}
