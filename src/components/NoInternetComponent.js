import React from 'react'

const NoInternetComponent = () => {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'block',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        width: '100%',
        padding: '5px 0',
        zIndex: '99',
      }}
    >
      No Internet! Please check you connection
    </div>
  )
}

export default NoInternetComponent
