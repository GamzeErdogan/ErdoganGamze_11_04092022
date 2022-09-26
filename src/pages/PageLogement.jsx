import React from 'react'
import {useParams} from 'react-router-dom';
import SlideShow from '../components/SlideShow';
import { useContext } from 'react'
import { dataContext } from '../context'
import Loader from '../components/Loader';
import Page404 from "./Page404";

const PageLogement = () => {

  const {id} = useParams();
  const { loading, data:datas} = useContext(dataContext);
  const logements = datas?.filter((logement) => logement.id === id);
  if (loading) return <Loader />
  else if (!logements?.length ) {
    return <Page404 />
  }

  return (
    <div>
        {
          logements.map(cardItem =>{
            return <SlideShow key={cardItem.id} pictures={cardItem.pictures} data={cardItem}/>
          })
        }
    </div>
  )
}

export default PageLogement