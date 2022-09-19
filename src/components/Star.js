import React from 'react'
import starRed from '../assets/starRed.png'
import starGray from '../assets/starGray.png'
import '../styles/star.css'

const Star = ({rating}) => {
    const ratingStar = parseInt(rating);

    const stars = [];
    for(var i=0; i< 5; i++){
        let starSrc = i < ratingStar ? starRed :starGray;
        stars.push(<img className='starDimension' key={i} src={starSrc} alt="rating" /> )
    }

  return (
   <div style={{display:'flex', flexDirection:'row', gap:'5px'}}>
         {stars}
   </div>
  )
}

export default Star;