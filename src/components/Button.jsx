import React from 'react'

const Button = (props) => {
    return (
        <button className={`px-5 py-2.5 ${props.bg ? props.bg : 'bg-orange-400'} rounded-lg cursor-pointer`}>{props.value}</button>
    )
}

export default Button
