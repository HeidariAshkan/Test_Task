import React from 'react'

const Input = ({type,placeholder,className, value, onChange, onFocus , onClose}) => {
  return (
    <>
      <div onClick={onClose} className='absolute top-0 left-0 right-0 bottom-0'></div>      
      <div onFocus={onFocus} className='px-3 py-4 bg-white border border-gray97 z-10'>
        <input type={type} placeholder={placeholder} value={value} className={`${className} w-full bg-transparent outline-none placeholder:text-grayA1 font-medium placeholder:text-sm`} onChange={onChange} />
      </div>
    </>
  )
}

export default Input