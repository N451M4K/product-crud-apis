import React from 'react'
import { useState } from 'react'
const Message = ({ message, isError }) => {
    return (
        <div className='msg'>
            {message &&
                <span className={isError ? 'error' : 'success'}>
                    {message}
                </span>
            }
        </div>
    )
}

export default Message