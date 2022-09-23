import React from 'react'
import {useParams} from 'react-router-dom';
import SlideShow from '../components/SlideShow';
import { useContext } from 'react'
import { dataContext } from '../context'
import Loader from '../components/Loader';



const PageLogement = () => {
  debugger;
  
    const {id} = useParams();
    const { loading, data:datas} = useContext(dataContext);
    if (loading) return <Loader />
  return (
    <div>
        {
          datas?.filter((logement) => (logement.id)===(id)).map(cardItem =>{
            return <SlideShow key={cardItem.id} pictures={cardItem.pictures} data={cardItem}/>
          })
        }
        
    </div>
  )
}

export default PageLogement