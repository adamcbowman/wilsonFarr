import React from 'react'


const ReviewCard = ({ key, name, text }) => {
  return (
    <div className="flex flex-col h-full w-full md:w-1/2 lg:w-1/3 p-6">
        <p className='text-xl font-semibold'>{text}</p>
        <p className='text-lg pt-2'>- {name}</p>
    </div>
  )
}

export default ReviewCard