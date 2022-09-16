import React from 'react'
import starRed from '../assets/starRed.png'
import starGray from '../assets/starGray.png'

const Star = ({rating}) => {
    const ratingStar = parseInt(rating);

    const stars = [];
    for(var i=0; i< 5; i++){
        let starSrc = i < ratingStar ? starRed :starGray;
        stars.push(<img style={{width: '20px'}} src={starSrc} alt="rating" /> )
    }

  return (
   <div style={{display:'flex', flexDirection:'row', gap:'5px'}}>
         {stars}
   </div>
  )
}

export default Star;