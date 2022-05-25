import React, { useEffect } from 'react'
import './HomePage.css'
import About from './About'
import AppSection from './AppSection'
import Footer from '../components/Footer'
import TopSection from './TopSection'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-body'>
      <div className='bg'>
        <div className='bg-inner p-grid p-align-center'>
          <div className='bg-title p-col'>
            BitByBit
            <div className='bg-subtitle p-col'>Airbus Aerothon Team</div>
          </div>
        </div>
      </div>
      <div className='top-section'>
        <TopSection />
      </div>
      <div id='about'>
        <svg
          className='waves'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 24 150 28'
          preserveAspectRatio='none'
          shapeRendering='auto'
        >
          <defs>
            <path
              id='gentle-wave'
              d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
            />
          </defs>
          <g className='parallax1'>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(9, 80, 211, 0.7)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(9, 80, 211, 0.5)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(9, 80, 211, 0.3)'
            />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#0950d3' />
          </g>
        </svg>
      </div>
      <div className='home-card-container1 about'>
        <About />
      </div>
      <div className='home-card-container1 app-section p-mt-4'>
        <AppSection />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
