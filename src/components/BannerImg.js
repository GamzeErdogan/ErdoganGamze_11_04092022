import '../styles/bannerImg.css';


 function BannerImg({source,height, title,isActive}) {
  return (
    <div className='bannerDiv-dimension'>
        <img src={source} style={{height:{height}}} alt={title}/>
        { isActive ? 
         <p className='title'>Chez vous, partout et ailleurs</p> : null}
       
    </div>
  )
}
export default BannerImg