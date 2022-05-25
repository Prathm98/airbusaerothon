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
      title: 'Title or headline 1',
      desc: 'Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description.',
    },
    {
      icon: 2,
      color: '#526a76',
      title: 'Title or headline 2',
      desc: 'Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description.',
    },
    {
      icon: 3,
      color: '#e91e63',
      title: 'Title or headline 3',
      desc: 'Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description.',
    },
    {
      icon: 4,
      color: '#f57c00',
      title: 'Title or headline 4',
      desc: 'Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description.',
    },
    {
      icon: 5,
      color: '#A0522D',
      title: 'Title or headline 5',
      desc: 'Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description. Dummy text for description.',
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
      <Card title={item.title} subTitle={item.date}>
        <div style={{ lineHeight: '1.3' }}>{item.desc}</div>
      </Card>
    )
  }

  return (
    <div className='timeline-demo'>
      <div className='card' style={{ padding: '3%' }}>
        <h1 className='p-text-center' style={{ color: '#495057' }}>
          ABOUT PROJECT
        </h1>
        <Divider></Divider>
        <h2 className='p-text-center' style={{ color: '#495057' }}>
          “Headline text line”
        </h2>
        <h3 className='p-text-center' style={{ color: '#495057' }}>
          Sub headline text line decription. Sub headline text line decription.
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
      <div id='mobile_app'>
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
