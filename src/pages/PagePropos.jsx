import React from 'react'
import PageProposImg from '../assets/PageProposImg.png'
import BannerImg from '../components/BannerImg'
import DropDown from '../components/DropDown'

const PagePropos = () => {
  return (
    <div>
        <BannerImg source={PageProposImg} title='Gokyuzu' isActive={false}/>
        <DropDown title="Fiabilite" width={'80%'} height={'90px'} description="1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
        <DropDown title="Respecte" width={'80%'} height={'90px'} description="2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
        <DropDown title="Service" width={'80%'} height={'90px'} description="3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
        <DropDown title="Responsabilite" width={'80%'} height={'90px'} description="4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>

</div>
  )
}

export default PagePropos