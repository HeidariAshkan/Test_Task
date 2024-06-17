import React from 'react'
import chevron from '../../assets/icons/chevron-down.png'

const Select = ({title, children , onToggle , isOpen}) => {


  return (
  <>
    <div className='flex flex-col cursor-pointer w-full relative bg-white' >
        <div className='px-3 py-4 w-full bg-white border border-gray97' onClick={onToggle}>
            <div className='flex items-center justify-between gap-4' >
                <p className='text-sm text-medium '>
                    {title}
                </p>
                <img className={`w-3 h-2 ${isOpen ? 'rotate-180' : ''} transition-all`} src={chevron} alt=""   />
            </div>

        </div>
        <div className={`flex flex-col absolute left-0 w-full min-w-max top-full mt-1  gap-1 bg-white border-gray97 transition-all overflow-hidden ${isOpen ? "max-h-screen p-1 border" :"max-h-0"}`}>
                {children}
        </div>
    </div>
  </>

  )
}

export default Select
