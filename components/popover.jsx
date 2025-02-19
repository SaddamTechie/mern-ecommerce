'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { useState } from "react";

export function AppPopOver({text,category,subcategories}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
      <p className="w-full" variant="outline" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {text}
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-150"  side="right"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      >
        <div className="grid grid-cols-4">
          {subcategories.map((subcategory,index)=>(
            <Link key={index} href={`/category/${subcategory}`}>
            <div>{subcategory}</div>
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
