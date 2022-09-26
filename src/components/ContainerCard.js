import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'



const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // padding: 5px;
  background-color:#ff6060;
  border-radius: 10px;
  width: 340px;
  height: 340px;
  margin: 20px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
 
  }
  @media screen and (max-width: 500px){
    width:335px;
    height:255px;
  }
`
const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 500px){
    width:335px;
    height:215px;
  }
`
const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`
const ContainerCard = ({id, image, title, location}) => {
  
   
  return (
   <CardWrapper>
      
        <Link to={"logement/" + id }>
            <CardImage src={image} alt={title} />
        </Link>
        
        <CardTitle>{location}</CardTitle>
   </CardWrapper>
  )
}

export default ContainerCard