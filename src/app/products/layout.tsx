"use client"
import React from 'react'
import { usePathname } from 'next/navigation';

const Layout = ({children}:any) => {
    const  pathName = usePathname();
  return (
    <> 

        {
            pathName !== '/products/product3' ? 
            <h2>Common Layout For Contact</h2> : null

        }

       
        {children}
    </>
  )
}

export default Layout;
