import React,{useState} from 'react'
import '../styles/dropdown.css'
import upArrow from '../assets/upArrow.png'
import down from '../assets/down.png'
import styled from 'styled-components'

const Button = styled.button`
  width: ${props => props.width}; 
  height:47px;
  background-color: #FF6060;
  border-radius: 5px;
  border: none;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  cursor: pointer;
  font-weight:500;
  @media screen and (max-width: 500px){
    width:90%;
    height:40px;
    font-size:18px;
   }
  
`
const DescriptionDiv = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color:#F6F6F6;
  color: #FF6060;
  margin-bottom: 20px;
  @media screen and (max-width: 500px){
   height:max-content;
   width:90%;
  }
`
const DropDown = ({title,description, width, height, equipementBoolean}) => {
  const [isVisible,visibleChange] = useState(false);
  
  return (
    <div className='dropdown--flex'>
          {
            isVisible===false ? <Button width={width} style={{marginBottom:'20px'}} className='dropdown--button' onClick={()=>visibleChange(!isVisible)}>{title}<img className="dropUpIcon" src={upArrow} alt="up arrow"/></Button>
            : <Button width={width} className='dropdown--button' onClick={()=>visibleChange(!isVisible)}>{title}<img className="dropDownIcon" src={down} alt="down arrow"/></Button>
          } 
        
        
        {
          isVisible ? <DescriptionDiv width={width} height={height} className='dropdown--description'>
          { equipementBoolean ? <p style={{whiteSpace: 'pre-wrap'}}>{description}</p>  : <p>{description}</p>}
          
      </DescriptionDiv> : null
        }
        
    
    </div>
  )
}

export default DropDown