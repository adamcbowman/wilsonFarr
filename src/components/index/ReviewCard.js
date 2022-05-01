import React from 'react'


const ReviewCard = ({ name, text }) => {
  return (
    <div className='text-left'>
        <p className='md:text-xl font-semibold'>{text}</p>
        <p className='md:text-lg pt-2 italic'>- {name}</p>
    </div>
  )
}

export default ReviewCard