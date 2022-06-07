import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Travel from '../components/Travel'
import TravelLogForm from '../components/TravelLogForm'
import RollTide from '../images/RollTide.bmp'

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
        console.log(travelID)
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
        <div style={{backgroundImage: `url(${RollTide})`}}>
            <h1 style={{ textAlign: "center", color:"white" }}>Travel Log</h1>
            <div className="travel--container"
            style={{backgroundImage: `url(${RollTide})`}}>
                <TravelLogForm
                    submit={addTravelLog}
                    btnText="Add Travel" />
            </div>

            <div className='filter-box'
            style={{backgroundImage: `url(${RollTide})`}}>
                <p style={{color:"white", fontSize:"25px"}}>Filter by City:</p>
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
        </div>
    );
}

