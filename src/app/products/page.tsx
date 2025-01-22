import React from 'react'
import Link from 'next/link';
const ProductList = () => {
  return (
  <>
        <h1>Product List</h1>
        <ul>
           <li>
                <Link href="/products/product1">Product1</Link>
           </li>
           <li>
                <Link href="/products/product2">Product2</Link>
           </li>
           <li>
                <Link href="/products/product3">Product3</Link>
           </li>

        </ul>
  </>
  )
}

export default ProductList;
