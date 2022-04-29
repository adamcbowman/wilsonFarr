import React from 'react'


const ReviewCard = ({ key, name, text }) => {
  return (
    <div className="flex flex-col h-full w-full md:w-1/2 lg:w-1/3 p-4">
        <p>{text}</p>
        <p>{name}</p>
    </div>
  )
}

export default ReviewCard