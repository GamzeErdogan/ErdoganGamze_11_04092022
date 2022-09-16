import React from 'react'
import '../styles/underslide.css'
import TagsInPageLogement from './TagsInPageLogement'
import Star from './Star'



const UnderSlide = ({cardItem}) => {
  return (
    <div style={{marginBottom:'30px'}}>
      <div className='flex'>
          <div className='titleDiv'>
              <p className='colorTitle'>{cardItem.title}</p>
              <p className='location'>{cardItem.location}</p>
          </div>
          <div className='hostRond-div'>
              <p className='hostName'>{cardItem.host.name}</p>
              <div className='rond'></div>
          </div>
      </div>
      <div className='tagAndStarContainer'>
          <div className='tagsDiv'>
            {cardItem.tags.map(tag =>
              <TagsInPageLogement tagInPageLogement={tag}/>)}
          </div>
          <div>
              <Star rating={cardItem.rating} />         
          </div>
      </div>
      
    </div>
  )
}

export default UnderSlide