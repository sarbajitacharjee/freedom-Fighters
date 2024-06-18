import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    
    <header class="bg-white shadow-md">
    <div class="container mx-auto px-4">
        <div class="flex justify-between  items-center py-4">
            
                
        
              <Link href="/">  <Image
        src="/freedom.png"
        alt="Example Image"
        width={80}
        height={100}
      /></Link>
            
            <nav class="space-x-10 text-xl">
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/Services">Services</Link>
                <Link href="/Contact">Contact</Link>
            </nav>

            <div class="flex  gap-6">
                <Link href="/Login" class="text-black border-2 border-black hover:bg-gray-800 hover:text-white py-3 px-6 rounded-md ">Login</Link>
                <Link href="/Register" class="text-white bg-black hover:bg-gray-800 rounded-md py-3 px-5">Register</Link>
            </div>
        </div>
    </div>
</header>
    </>
  )
}

export default Header
