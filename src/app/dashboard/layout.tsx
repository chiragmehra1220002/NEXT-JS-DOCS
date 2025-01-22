import React from 'react'

const layout = ({children,notifications,users}:{
    children:React.ReactNode,
    notifications:React.ReactNode,
    users:React.ReactNode
}) => {
  return (
    <>
        <div>   {children}</div>
        
 
    </>
  )
}

export default layout