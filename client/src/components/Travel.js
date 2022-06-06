import React, { useState } from 'react'
import TravelLogForm from './TravelLogForm' //for put request
import RollTide from '../images/RollTide.bmp'

export default function Travel(props) {
  // console.log(props)

  //deconstruct props for DRY code
  const {
    _id,
    city,
    restaurant,
    placesToVisit,
    cost
  } = props

  //for put request
  const [editToggle, setEditToggle] = useState(false)

  return (
    <div style={{ 
      border: "1px solid white",
      fontSize:"20px",
      color:"white", 
      backgroundImage: `url(${RollTide})`}}>
      

      {!editToggle ?
        <>
          <h1>City: {city}</h1>
          <h3>Restaurants: {restaurant}</h3>
          <h3>Places to Visit: {placesToVisit}</h3>
          <h3 style={{ color: "green" }}>Cost: ${cost}</h3>

          <button
            className='delete-btn'
            onClick={() => props.deleteTravelLog(_id)}>
            Delete
          </button>

          <button
            className='edit-btn'
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
          </button>
        </>
        :
        <>
          {/* Put req */}
          <TravelLogForm
            city={city}
            restaurant={restaurant}
            placesToVisit={placesToVisit}
            cost={cost}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editTravelLog}
          />
          <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)} >
            Close
          </button>
        </>
      }
    </div>
  )
}
