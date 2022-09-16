import React from 'react'
import LogoFooter from '../assets/LogoFooter.png'
import '../styles/footer.css'


const Footer = () => {
  return (
    <div className='footerDiv'>
        <img src={LogoFooter} alt="Footer"/>
        <p>@2020 Kasa. All rights reserved.</p>
    </div>
  )
}

export default Footer