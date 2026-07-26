import React from 'react'
import { Star, StarHalf } from "lucide-react";

const ProductRating = ({rating}) => {
  return (
    <div className="flex items-center gap-0.5">
        {Array.from({length: 5}).map((_,i)=>{
            const starValue = i + 1
            if(rating >= starValue){
                return <Star key={i}
                className='w-3.5 h-3.5 fill-amber-400 text-amber-400'
                />
            }
            if(rating >= starValue - 0.5){
                return <StarHalf key={i}
                className='w-3.5 h-3.5 fill-amber-400 text-amber-400'
                />
            }
            return <Star key={i}
            className='w-3.5 h-3.5'
            />
        })}
    </div>
  )
}

export default ProductRating