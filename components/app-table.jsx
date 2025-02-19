import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast";
import { useProductStore } from "@/store/product";
import { AdminProductSheet } from "./app-sheet";
import { Button } from "./ui/button";
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export function AdminProductTable({data}) {
    const { deleteProduct, updateProduct } = useProductStore();
    const { toast } = useToast();

    const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
        if(!success){
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
        }else{
            toast({
                title: "Successful.",
                description: "Product has been deleted.",
              })  
        }
	};




    const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
        if(!success){
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
        }else{
            toast({
                title: "Successful.",
                description: "Product has been created.",
              })  
        }
	};

    return (
      <Table>
        <TableCaption>A list of products in store.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product?._id}>
              <TableCell className="font-medium">{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell><AdminProductSheet product={product} handleUpdateProduct={handleUpdateProduct}/><Button onClick={()=>handleDeleteProduct(product._id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  