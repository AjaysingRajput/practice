import React from 'react'

const Cards = ({element}) => {
  return (
    <div>
    <div className= {`border border-black h-[130px] md:h-[110px] rounded-lg flex flex-col justify-center items-center cursor-pointer relative overflow-hidden bg-${element.bg}`}>
    
      <div className='font-samibold text-[30px] md:sm'>
        {element.price}
      </div>
      <div className='mt-2 mx-2'>
        <p className='text-[20px] md:text-lg '>{element.title}</p>
      </div>
    
    </div>
    
    </div>
  )
}

export default Cards
