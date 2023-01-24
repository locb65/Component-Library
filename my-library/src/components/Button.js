import PropTypes from 'prop-types'
import { AiOutlineShoppingCart } from "react-icons/ai";

function Button ({ icon, label, backgroundColor = 'red', size = "medium", onClick, color = 'white', border ='solid gray 2px' }) {
    let scale = 1
    if (size === 'small') scale = 0.75
    if (size === 'large') scale = 1.5
    if (size === 'extra-large') scale = 2.0
        const style = {
            backgroundColor,
            color,
            padding: `${scale *0.5}rem ${scale*1}rem`,
            border,
            borderRadius: '10px',
        }
    return (
        <button onClick={onClick} style ={style} >
            {icon} {label}
        </button>
    )
}

Button.propTypes = {
    icon: typeof Symbol(),
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
    onClick: PropTypes.func,
    color: PropTypes.string,
    border: PropTypes.string
    
}

export default Button