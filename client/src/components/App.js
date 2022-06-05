import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Travel from './Travel'
import TravelLogForm from './TravelLogForm'



// import { Routes, Route, Link } from "react-router-dom"
// import Home from './Home'
// import About from './About'



export default function App() {
  const [travelLog, setTravelLog] = useState([])

  //helper function to make code more re-usable
  //GET request
  function getTravelLog() {
    axios.get("/travel")
      // .then(res => console.log(res))
      .then(res => setTravelLog(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }
  //POST request
  function addTravelLog(newTravelLog) {
    axios.post("/travel", newTravelLog)
      // .then(res => console.log(res))
      .then(res => {
        setTravelLog(prevTravelLog => [...prevTravelLog, res.data])
      })
      .catch(err => console.log(err))
  }
  //Delete request
  function deleteTravelLog(travelID) {
    axios.delete(`/travel/${travelID}`)
      // .then(res => console.log(res))
      .then(res => {
        setTravelLog(prevTravelLog => prevTravelLog.filter(travel => travel._id !== travelID))
      })
      .catch(err => (err))
  }
  //PUT request (edit)
  function editTravelLog(updates, travelID) {
    axios.put(`/travel/${travelID}`, updates)
      // .then(res => console.log(res))
      .then(res => {
        setTravelLog((prevTravelLog) => [
          ...prevTravelLog.map((travel) => (travel._id !== travelID ? res.data : travel))
        ])
      })
      .catch(err => (err))
  }

  //filter by city
  function handleFilter(e) {
    if (e.target.value === "reset") {
      getTravelLog()
    } else {
      axios.get(`/travel/search/city?city=${e.target.value}`)
        .then(res => setTravelLog(res.data))
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    getTravelLog()
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>South East Alabama Travel Log</h1>
      <div className="travel--container">
        <TravelLogForm
          submit={addTravelLog}
          btnText="Add Travel" />
      </div>

      <div className='filter-box'>
        <h4>Filter by City:</h4>
        <select
          onChange={handleFilter}
          style={{ width: "120px" }}>
          <option value="reset">All Cities</option>
          <option value="Enterprise">Enterprise</option>
          <option value="Dothan">Dothan</option>
          <option value="Ozark">Ozark</option>
          <option value="Fort Rucker">Fort Rucker</option>
          <option value="Daleville">Daleville</option>
        </select>
      </div>

      {travelLog.map(travels =>
        <Travel
          {...travels}
          key={travels._id}
          deleteTravelLog={deleteTravelLog}
          editTravelLog={editTravelLog} />
      )}

      {/* Front end stuff */}

      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/travel">Travel Log</Link>
        <Link to="/about">About us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<TravelLogForm />} />
        <Route path="about" element={<About />} />
      </Routes> */}

    </div>
  );
}


// FOOTER IDEA
//function Footer() {
//   return (
//       <footer className="footer">
//           <small>© 2021 Ziroll development. All rights reserved.</small>
//       </footer>
//   )
// }