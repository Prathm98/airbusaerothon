import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <br />
      <br />
      <footer
        className='p-grid'
        style={{
          borderTop: '1px solid gray',
          padding: '10px',
          backgroundColor: '#2a2a2a',
          color: '#fff',
        }}
      >
        <div className='p-col-1'></div>
        <div className='p-col-5'>
          <strong>TEAM BIT BY BIT</strong>
        </div>
        <div className='p-col-5'>
          <span>NO RIGHTS RESERVED.</span>
        </div>
        <div className='p-col-1'></div>
      </footer>
    </Fragment>
  )
}

export default Footer
