import React from 'react'

const AuthsLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
      Authors layout is special only for Authors Route or Nested Routes inside the Authors Directory

      {children}
    </div>
  )
}

export default AuthsLayout
