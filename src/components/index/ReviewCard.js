import React from 'react'


const ReviewCard = ({ name, text }) => {
  return (
    <div className='md:p-6'>
        <p className='md:text-xl font-semibold'>{text}</p>
        <p className='md:text-lg pt-2'>- {name}</p>
    </div>
  )
}

export default ReviewCard