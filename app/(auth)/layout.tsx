import React from 'react'

const Authlayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div>
        <h1> Auth layout is special only for auth pages</h1>
        {children}
        </div>
  )
}

export default Authlayout