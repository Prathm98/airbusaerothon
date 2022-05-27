import React from 'react'
import AppDetails from './AppDetails'
import './HomePage.css'
import data from '../assets/appsData.json'

const AppSection = () => {
  return (
    <div className='p-grid'>
      {/* App section text content */}
      <div className='p-col-12 p-md-6 p-lg-7 app-body'>
        <div className='app-section-title'>Team BitByBit</div>
        <div
          className='app-section-title'
          style={{
            color: '#4caf50',
            textTransform: 'uppercase',
            marginTop: '7px',
          }}
        >
          Use for any platform project!
        </div>
        <p className='app-section-body'>
          One stop solution for every platform requirement. No need to deal with
          the initial setup issues or initial projet structure setup issues.
          Just download any stack of your choice, follow the instructions
          provided along with each stacks and start with the developement.
        </p>
        <br />
      </div>
      {/* App section text content end */}

      {/* App section boilerplate content */}
      <div className='p-col-12 p-md-12 p-lg-12 app-body'>
        <AppDetails heading={'WEB FRONT END STACK'} data={data.front} />
        <AppDetails heading={'BACK END STACK'} data={data.back} />
        <AppDetails heading={'OTHER STACK'} data={data.other} />
      </div>
      {/* App section boilerplate content end */}
    </div>
  )
}

export default AppSection
