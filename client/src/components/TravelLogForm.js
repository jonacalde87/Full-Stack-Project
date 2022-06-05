import React, { useState } from 'react'

export default function TravelLogForm(props) {
    const initialInputs = {
        city: props.city || "", //for put req modification
        restaurant: props.restaurant || "",
        placesToVisit: props.placesToVisit || "",
        cost: props.cost || ""
    }

    const [inputs, setInputs] = useState(initialInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        //post request
        props.submit(inputs, props._id)
        setInputs(initialInputs)
    }

    function handleCity(e) {
        setInputs((prevState) => ({
            ...prevState,
            city: e.target.value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>

            <select onChange={handleCity}>
                <option>- Select City -</option>
                <option value="Enterprise">Enterprise</option>
                <option value="Ozark">Ozark</option>
                <option value="Fort Rucker">Fort Rucker</option>
                <option value="Daleville">Daleville</option>
                <option value="Dothan">Dothan</option>
            </select>
            
            <input
                type="text"
                name='restaurant'
                value={inputs.restaurant}
                onChange={handleChange}
                placeholder="Restaurants"
            />
            <input
                type="text"
                name='placesToVisit'
                value={inputs.placesToVisit}
                onChange={handleChange}
                placeholder="Places to Visit"
            />
            <input
                type="number"
                name='cost'
                value={inputs.cost}
                onChange={handleChange}
                placeholder="Trip Cost"
            />
            <button className='submit-btn'>{props.btnText}</button>
        </form>
    )
}


