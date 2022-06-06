import React from 'react'
import { useNavigate } from 'react-router-dom'
import RollTide from '../images/RollTide.bmp'


export default function Home() {
  const navigate = useNavigate()
  return (
    <div 
      className="home-content"
      style={{ 
        backgroundImage: `url(${RollTide})`,
       
      }}>
        <h1>South Alabama Travel Log App</h1>
        ----
        <p>
          This app was built because many people think that there are not fun activities to do in this area.<br/><br/>
          I have created an app that will allow people to share their travel experiences with other travelers.<br/><br/>
          The main focus will be the South East Alabama, especifically Coffee County.<br/><br/>
          Users will be able to browse the travel experience of others, filter by city, and add their own travel experiences.<br/><br/> 
          Users can also input different factors such as location, hotels, costs, and places to visit,<br/><br/>
          including but not limited to restaurants, historical sites, outdoor activities, and more.
          <br/><br/>
          * Alabama has an honor system, and nobody will mess up others' travel experiences. 😊<br/><br/><br/><br/>
        </p>
        <button onClick={() => navigate("/travel")}>Create your Travel Log</button>
        <br/><br/><br/><br/><br/>
    </div>
  )
}
