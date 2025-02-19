import { Calendar, Home, Inbox, Search, Settings,ShoppingBasket,ShoppingCart,Shirt, Dumbbell } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { AppPopOver } from "./popover"

// Menu items.
const items = [
  {
    title: "Formal Wear",
    url: "/",
    icon: Shirt,
    subcategories:["Suits","Shirts","Trousers"]
  },
  {
    title: "Casual Wear",
    url: "#",
    icon: ShoppingBasket,
    subcategories:["T-Shirts","Jeans","Shorts","Casual Shirts"]
  },
  {
    title: "SportsWear",
    url: "shopping-cart",
    icon: Dumbbell,
    subcategories:["AthleticTops","Bottoms","OuterWear","FootWear"]
  },
  {
    title: "OuterWear",
    url: "checkout",
    icon: ShoppingBasket,
    subcategories:["Jackets","Coats","RainGear"]
  },
  {
    title: "EthnicWear",
    url: "#",
    icon: Search,
    subcategories:["Traditional","Festive"]
  },
  {
    title: "Accessories",
    url: "#",
    icon: Settings,
    subcategories:["Bags","Hats","Watches","Jewelry"]
  },

]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <AppPopOver text={item.title} category={item.title} subcategories={item.subcategories}/>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
