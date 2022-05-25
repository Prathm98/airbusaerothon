import React from 'react'
import './AppDetails.css'
import { Carousel } from 'primereact/carousel'
import { Button } from 'primereact/button'

const AppDetails = ({ heading, data }) => {
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  const productTemplate = (app) => {
    return (
      <div className='app-item'>
        <div className='app-item-content'>
          <div className='mb-3'>
            <img
              src={`images/app/${app.image}`}
              onError={(e) =>
                (e.target.src =
                  'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
              }
              alt={app.name}
              className='app-image'
            />
          </div>
          <div>
            <h3 className='mb-1'>{app.name}</h3>
            <div className='car-buttons mt-5'>
              <Button
                icon='pi pi-align-left'
                className='p-button p-button-rounded mr-2'
              />{' '}
              <a href={app.zip} target='_blank' rel='noreferrer'>
                <Button
                  icon='pi pi-download'
                  className='p-button-success p-button-rounded mr-2'
                />
              </a>{' '}
              <a href={app.github} target='_blank' rel='noreferrer'>
                <Button
                  icon='pi pi-github'
                  className='p-button-help p-button-rounded'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='carousel-demo'>
      <div className='card'>
        <Carousel
          value={data}
          numVisible={4}
          numScroll={4}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
          header={<h2>{heading}</h2>}
        />
      </div>
    </div>
  )
}

export default AppDetails
