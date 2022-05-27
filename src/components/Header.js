import React, { Fragment, useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Divider } from 'primereact/divider'
import { Link } from 'react-router-dom'

const Header = () => {
  // state for sidebar visibility
  const [visibleLeft, setVisibleLeft] = useState(false)

  return (
    // Navigation bar
    <nav
      className='p-shadow-3 p-d-flex p-p-3 p-jc-between'
      style={{ zIndex: 100 }}
    >
      {/* Header logo */}
      <div style={{ marginTop: '-8px' }}>
        <Link to='/' style={{ float: 'left', textDecoration: 'none' }}>
          <div className='logo-text'>
            {'</AEROTHON> '}
            <sup>AIRBUS</sup>
          </div>
        </Link>
      </div>
      {/* Header logo end */}

      <div className='p-mr-2'>
        <Link
          to='#'
          className='fc-sidebar-trigger'
          onClick={() => setVisibleLeft(true)}
        >
          <i className='pi pi-bars'></i>
        </Link>

        {/* Header nav links */}
        <Fragment>
          <a
            href='#!'
            className='header_link'
            onClick={() => window.scroll(0, 0)} //scrolls to top
          >
            HOME
          </a>
          <a href='#about' className='header_link'>
            ABOUT US
          </a>
          <a href='#apps' className='header_link'>
            APP STACKS
          </a>
          <a href='#team' className='header_link'>
            OUR TEAM
          </a>
          <a
            href='https://github.com/Prathm98/airbusaerothon'
            target='_blank'
            rel='noreferrer'
            className='header_link'
          >
            <i className='pi pi-github'></i>
          </a>
        </Fragment>
        {/* Header nav links end */}
      </div>

      {/* Sidebar navigation */}
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <Divider />
        <h5>
          <a
            href='#!'
            className='sidebar_link'
            onClick={() => {
              setVisibleLeft(false)
              window.scroll(0, 0)
            }}
          >
            HOME
          </a>
        </h5>
        <Divider />
        <h5>
          <a
            href='#about'
            className='sidebar_link'
            onClick={() => setVisibleLeft(false)}
          >
            ABOUT US
          </a>
        </h5>
        <Divider />
        <h5>
          <a
            href='#apps'
            className='sidebar_link'
            onClick={() => setVisibleLeft(false)}
          >
            APP STACKS
          </a>
        </h5>
        <Divider />
        <h5>
          <a
            href='#team'
            className='sidebar_link'
            onClick={() => setVisibleLeft(false)}
          >
            OUR TEAM
          </a>
        </h5>
        <Divider />
        <h5>
          <a
            href='https://github.com/Prathm98/airbusaerothon'
            target='_blank'
            rel='noreferrer'
            className='sidebar_link'
            onClick={() => setVisibleLeft(false)}
          >
            GITHUB <i className='pi pi-github'></i>
          </a>
        </h5>
      </Sidebar>
      {/* Sidebar navigation end */}
    </nav>
  )
}

export default Header
