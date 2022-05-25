import React from 'react'
import AppDetails from './AppDetails'
import './HomePage.css'
import data from '../assets/appsData.json'

const AppSection = () => {
  return (
    <div className='p-grid'>
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
          Creating Desired Opportunities for Candidates and Companies
          <br />
          Being Shortlisted for pools of opportunity. Getting Screened with
          smarter tools & engaging them right.
        </p>
        <br />
        <br />
        <h4>
          Available for &nbsp;
          <i className='pi pi-android' style={{ color: '#4caf50' }}></i>
        </h4>
      </div>
      <div className='p-col-12 p-md-12 p-lg-12 app-body'>
        <AppDetails heading={'WEB FRONT END STACK'} data={data.front} />
        <AppDetails heading={'BACK END STACK'} data={data.back} />
        <AppDetails heading={'OTHER STACK'} data={data.other} />
      </div>
    </div>
  )
}

export default AppSection
