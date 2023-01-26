import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'

function TextFields ({placeHolder}) {
    const [ value, setValue] = useState ()
    const change = event => {
        setValue(event.target.value)
    }
 
    return (
        <div className = 'TextField'> 
        <input onChange = {change} value = {value} placeHolder = {placeHolder} />
        </div>
        )
}


TextFields.propTypes ={
placeHolder: PropTypes.string
}

export default TextFields