import React, {useState} from 'react'
import '../styles/slideshow.css'
import rightArrowButton from '../assets/rightArrowButton.png'
import leftArrowButton from '../assets/leftArrowButton.png'
import UnderSlide from '../components/UnderSlide';
import DropDown from './DropDown';

const SlideShow = ({pictures, data}) => {  
  let [displayedImageIndex, setDisplayedImageIndex] = useState(0);

  const displayImage = (n) =>{
    if((displayedImageIndex + n) < 0){
      //Before first image
      setDisplayedImageIndex(pictures.length -1);
    } else if((displayedImageIndex + n) > pictures.length -1) {
      //After last image
      setDisplayedImageIndex(0);
    } else {
      //Next + Previous 
      setDisplayedImageIndex(displayedImageIndex + n);
    }
  }
  
  return (
  <div>
    <div className="slideshow-container">
            {
              pictures.map((element, index) => 
                <img src={element} key={index} alt={data.title} className="mySlidesImg fade" style={{display: displayedImageIndex === index ? 'block' : 'none' }}/>
                )
               
            }
           <p className='imageNumber'>{displayedImageIndex+1}\{pictures.length}</p>
           <img className='next' src={rightArrowButton} alt='next button'  style={{display: pictures.length > 1 ? 'block' : 'none' }} onClick={() => displayImage(+1)} />
           <img className='prev' src={leftArrowButton} alt='previous button' style={{display: pictures.length > 1 ? 'block' : 'none' }} onClick={() => displayImage(-1)}/>

    </div>
    <UnderSlide  cardItem={data}/>
    <div className='dropDownFlex'>
      <DropDown title='Description' width={'100%'} height={'180px'} description={data.description} />
      <DropDown title='Equipements' width={'100%'} height={'180px'} description={data.equipments} equipementBoolean={true}/>
    </div>
    
  </div>
)}


export default SlideShow