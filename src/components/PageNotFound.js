import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div style={{ marginTop: '20vh', textAlign: 'center' }}>
      <b style={{ fontSize: '15vh' }}>404</b>
      <h1>Page not found</h1>
      <Link to='/' style={{ textDecoration: 'none' }}>
        Home
      </Link>
    </div>
  )
}

export default PageNotFound
