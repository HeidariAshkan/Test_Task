import React from 'react'
import Star from '../Star'

const Movie = ({ item ,onClick }) => {
  return (
    <div onClick={onClick} className='flex cursor-pointer flex-col gap-1 w-full'>
        <div className='flex items-center justify-between'>
            <p>{item?.title}</p>
            <p>{item?.category}</p>
        </div>
        <Star scale={10} value={item?.rating}/>
    </div>
  )
}

export default Movie