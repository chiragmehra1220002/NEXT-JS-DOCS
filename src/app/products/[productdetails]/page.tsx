"use client"
import React, { FC } from 'react';
  //Unwrap the params object using React.use


const Page: FC = ({ params }: any) => {
    const productdetails = (React.use(params) as { productdetails: string }).productdetails;
    console.log(productdetails);

  return (
    <>
      <h2>Product Details of: {productdetails}</h2>
    </>
  );
}

export default Page;
