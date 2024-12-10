'use client'

import Link from 'next/link'
import { Button } from "./ui/button"
import { ShoppingCart, Search, User, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [cartItemCount, setCartItemCount] = useState(0)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">Marketplace</Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <Link href="/search" className="text-gray-500 hover:text-gray-700">Search</Link>
            <Link href="/login" className="text-gray-500 hover:text-gray-700">Login</Link>
            <Link href="/admin" className="text-gray-500 hover:text-gray-700">Admin</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartItemCount}</span>
                )}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/login">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}