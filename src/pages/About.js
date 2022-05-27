import React from 'react'
import { Timeline } from 'primereact/timeline'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'
// import './HomePage.css'

const About = () => {
  const events1 = [
    {
      icon: 1,
      color: '#9C27B0',
      img: 'desktop',
      title: 'BUILD FOR DEVELOPERS',
      desc: 'This solutions are build for the developers by the developers.',
    },
    {
      icon: 2,
      color: '#526a76',
      img: 'check-circle',
      title: 'EASY TO USE',
      desc: 'Ease to setup with just couple of instructions.',
    },
    {
      icon: 3,
      color: '#e91e63',
      img: 'github',
      title: 'OPEN SOURCE',
      desc: 'Every tech stack is available on github and free to use. Feel free to contribute to build better solution.',
    },
    {
      icon: 4,
      color: '#f57c00',
      img: 'clone',
      title: 'CROSS PLATFORM FRAMEWORKS',
      desc: 'Solution available for every platform including web, mobile & desktop.',
    },
    {
      icon: 5,
      color: '#A0522D',
      img: 'link',
      title: 'INTEGRATION WITH BACKEND',
      desc: 'Every front end or other stack has integration with backend and they are fetching data from backend.',
    },
  ]

  const customizedMarker = (item) => {
    return (
      <span
        className='custom-marker p-shadow-2'
        style={{ backgroundColor: item.color, fontWeight: 'bold' }}
      >
        {item.icon}
      </span>
    )
  }

  const customizedContent = (item) => {
    return (
      <Card subTitle={item.date} style={{ textAlign: 'center' }}>
        <div>
          <span className='p-p-3 p-m-2'>
            <i
              className={`pi pi-${item.img} p-shadow-4`}
              style={{
                fontSize: '2.5em',
                color: 'rgb(9, 80, 211)',
                padding: '0.5em',
                borderRadius: '10px',
              }}
            ></i>
          </span>
        </div>
        <br />
        <div className='p-card-title' style={{ color: 'black !important' }}>
          {item.title}
        </div>
        <div style={{ lineHeight: '1.3' }}>{item.desc}</div>
      </Card>
    )
  }

  return (
    <div className='timeline-demo'>
      <div className='card' style={{ padding: '3%' }}>
        <h1 className='p-text-center' style={{ color: '#495057' }}>
          ABOUT US
        </h1>
        <Divider></Divider>
        <h2 className='p-text-center' style={{ color: '#495057' }}>
          “One Place, Many Solutions”
        </h2>
        <h3 className='p-text-center' style={{ color: '#495057' }}>
          One stop destination for every platform compatible applications.
        </h3>
        <br />
        <Timeline
          value={events1}
          align='alternate'
          className='customized-timeline'
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
      <div id='apps'>
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
          <g className='parallax'>
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='0'
              fill='rgba(253, 250, 250, 0.7)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='3'
              fill='rgba(253, 250, 250, 0.5)'
            />
            <use
              xlinkHref='#gentle-wave'
              x='48'
              y='5'
              fill='rgba(253, 250, 250, 0.3)'
            />
            <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fdfafa' />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default About
