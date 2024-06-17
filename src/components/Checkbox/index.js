import React from 'react'

const Checkbox = ({ item , onChange , checked }) => {
  return (
    <div className='flex items-center gap-1 px-2 cursor-pointer'>
        <input className='cursor-pointer' checked={checked} type="checkbox" id={`${item?.id}${item?.title}`} value={item?.value} onChange={onChange}/>
        <label className='text-medium text-sm cursor-pointer' htmlFor={`${item?.id}${item?.title}`}>{item?.title}</label>
    </div>
  )
}

export default Checkbox