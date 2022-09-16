import React from 'react'
import { Link } from 'react-router-dom'
import  '../styles/errorP.css'

const Page404 = () => {
  return (
    <div className='errorPage'>
        <p className='titleError'>404</p>
        <p className='desc-error'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='errorLink'>Retourner sur la page d`accueil</Link>
    </div>
  )
}

export default Page404