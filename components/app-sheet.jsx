import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useToast } from "@/hooks/use-toast"
import { useProductStore } from "@/store/product"
import { useState } from "react"

export function AdminProductSheet({product,handleUpdateProduct}) {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Product</SheetTitle>
          <SheetDescription>
            Make changes to your products here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
             Name
            </Label>
            <Input
							name='name'
							value={product?.name}
                            className="col-span-3"
							onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
						/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Price
            </Label>
            <input
						
							name='price'
							type='number'
							value={product?.price}
                            className="col-span-3"
							onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
						/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Category
            </Label>
            <input
						
							name='category'
							type='text'
							value={product?.category}
                            className="col-span-3"
							onChange={(e) => setUpdatedProduct({ ...updatedProduct, category: e.target.value })}
						/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Image
            </Label>
            <input
						
							name='image'
							type='text'
							value={product?.image}
                            className="col-span-3"
							onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
						/>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={()=>handleUpdateProduct(product._id, updatedProduct)}>Create</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
