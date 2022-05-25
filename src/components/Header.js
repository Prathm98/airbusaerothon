import React, { Fragment, useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Divider } from 'primereact/divider'
import { Link } from 'react-router-dom'

const Header = () => {
  const [visibleLeft, setVisibleLeft] = useState(false)

  return (
    <nav
      className='p-shadow-3 p-d-flex p-p-3 p-jc-between'
      style={{ zIndex: 100 }}
    >
      <div style={{ marginTop: '-8px' }}>
        <Link to='/' style={{ float: 'left', textDecoration: 'none' }}>
          <div className='logo-text'>
            {'</AEROTHON> '}
            <sup>AIRBUS</sup>
          </div>
        </Link>
      </div>
      <div className='p-mr-2'>
        <Link
          to='#'
          className='fc-sidebar-trigger'
          onClick={() => setVisibleLeft(true)}
        >
          <i className='pi pi-bars'></i>
        </Link>
        <Fragment>
          <a href='#about' className='header_link'>
            ABOUT PROJECT
          </a>
          <a href='#mobile_app' className='header_link'>
            APP STACKS
          </a>
        </Fragment>
      </div>

      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <h5>
          <a
            href='#about'
            className='sidebar_link'
            onClick={() => setVisibleLeft(false)}
          >
            ABOUT PROJECT
          </a>
        </h5>
        <Divider />
        <h5>
          <a
            href='#mobile_app'
            className='sidebar_link'
            onClick={() => setVisibleLeft(false)}
          >
            APP STACKS
          </a>
        </h5>
      </Sidebar>
    </nav>
  )
}

export default Header
