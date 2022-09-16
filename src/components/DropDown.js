import React,{useState} from 'react'
import '../styles/dropdown.css'
import upArrow from '../assets/upArrow.png'
import down from '../assets/down.png'

const DropDown = ({title,description}) => {
  const [isVisible,visibleChange] = useState(false);
  return (
    <div className='dropdown--flex'>
          {
            isVisible===false ? <button style={{cursor:"pointer", marginBottom:"20px"}} className='dropdown--button' onClick={()=>visibleChange(!isVisible)}>{title}<img className="dropUpIcon" src={upArrow} alt="up arrow"/></button>
            : <button style={{cursor:"pointer"}} className='dropdown--button' onClick={()=>visibleChange(!isVisible)}>{title}<img className="dropDownIcon" src={down} alt="down arrow"/></button>
          } 
        
        
        {
          isVisible ? <div className='dropdown--description'>
          <p>{description}</p>
      </div> : null
        }
        
    
    </div>
  )
}

export default DropDown