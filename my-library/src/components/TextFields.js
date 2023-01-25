import PropTypes from 'prop-types'
import React from 'react'

function TextFields ({ padding = " 10px 25px", backgroundColor = 'white', label, border ='solid gray 1px'}) {
    const style = {
        border,
        backgroundColor,
        padding,
        width: '200px',
        borderRadius: '5px'
    }
    return (
        <div className = 'TextField' style={style} > {label} </div>
        )
}


TextFields.propTypes ={
label: PropTypes.string,
backgroundColor: PropTypes.string,
border: PropTypes.string,
width: PropTypes.string
}

export default TextFields