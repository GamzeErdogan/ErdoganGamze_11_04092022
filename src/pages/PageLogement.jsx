import React from 'react'
import {useParams} from 'react-router-dom';
import SlideShow from '../components/SlideShow';
import { useContext } from 'react'
import { dataContext } from '../context'



const PageLogement = () => {
    const {id} = useParams();
    const { data:datas} = useContext(dataContext);
    
  return (
    <div>
        {
          datas?.filter((logement) => (logement.id)===(id)).map(cardItem =>{
            return <SlideShow pictures={cardItem.pictures} data={cardItem}/>
          })
        }
        
    </div>
  )
}

export default PageLogement