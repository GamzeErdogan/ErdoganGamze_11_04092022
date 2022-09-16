import React from 'react'
import Banner from '../assets/Banner.png'
import BannerImg from "../components/BannerImg";
import ContainerCard from "../components/ContainerCard";
import styled from 'styled-components'
import { useContext } from 'react'
import { dataContext } from '../context'


const ContainerLogementsDiv = styled.div`
    width:95%;
    margin:auto;
    background-color:#F6F6F6;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 15px;
`
function Home() {
  const { data:datas } = useContext(dataContext);
  
//   const { loading, data: datas } = useFetch("http://localhost:3000/data/logements.json");
// if (loading) return <Loader />

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