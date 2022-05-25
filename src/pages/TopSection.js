import React from 'react'
import first from '../assets/img/rocket.png'

const TopSection = () => {
  return (
    <div className='p-grid'>
      <div className='p-col-12 first'>
        <div className='p-grid section-body'>
          <div className='p-col-12 p-md-6 p-lg-6 section-left'>
            <div className='section-title'>
              A QUICK & UNIQUE <br /> WAY TO KICKSTART <br /> YOUR PROJECT
            </div>
            <div className='section-body'>
              No need to worry about initial setup!
            </div>
          </div>
          <div className='p-col-12 p-md-6 p-lg-6 section-right'>
            <img
              src={first}
              alt='first section'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection
