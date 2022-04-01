import React from 'react'

export const Button = ({ label, btnColor, events }) => {
    const classname = `btn btn-${btnColor}`
    return <div className={classname} {...events}>
        {label}
    </div>
}