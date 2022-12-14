import React from 'react'
import Banner from '../assets/Banner.png'
import BannerImg from "../components/BannerImg";
import ContainerCard from "../components/ContainerCard";
import styled from 'styled-components'
import { useContext } from 'react'
import { dataContext } from '../context'
import Loader from '../components/Loader';


const ContainerLogementsDiv = styled.div`
    width:95%;
    margin:auto;
    background-color:#F6F6F6;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 15px;
    font-family: "Montserrat";
`
function Home() {
  const {loading, data:datas } = useContext(dataContext);
 
if (loading) return <Loader />

  return (
    <div>
        <BannerImg source={Banner} style={{height:223}} title='Gokyuzu' isActive={true}/>
        <ContainerLogementsDiv>
          {
            datas?.map((logement,index)=>(
              <ContainerCard 
                key={index}
                id={logement.id}
                image={logement.cover}
                title={logement.title}
                location={logement.location}
             />
             
            ))
          }
        </ContainerLogementsDiv>
          
          
    </div>
    
    )
    
  
}
export default Home;