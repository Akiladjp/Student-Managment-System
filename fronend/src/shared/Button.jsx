import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <div>
            <button className='bg-blue-600 text-white font-bold px-3 py-1 rounded-lg shadow-md'>{props.title}</button>
        </div>
    </div>
  )
}
