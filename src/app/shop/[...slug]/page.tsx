import React from 'react'

const page = ({ 
    params, 
}:{
    params:{
        slug:string[];
    };
}) => 
    
{
 if(params.slug.length === 2){
  return (
    <h1>
        Available products in shop are {params.slug[0]} and {params.slug[1]}
    </h1>
  );
}else if(params.slug.length === 1){
    return <h1>Available products in shop are {params.slug[0]}</h1>
  }
  return <h1>Shop Page</h1>

}

export default page;