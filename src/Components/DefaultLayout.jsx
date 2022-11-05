import React from 'react'

const DefaultLayout = (props) => {
  return (
    <div>
      <div className='header'>
        <div className='d-flex justify-content-between'>
          <h1>Cars Rental</h1>
        </div>
      </div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout
