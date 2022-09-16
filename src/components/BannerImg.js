import '../styles/bannerImg.css';


 function BannerImg({source, title,isActive}) {
  return (
    <div className='bannerDiv-dimension'>
        <img src={source}  alt={title}/>
        { isActive ? 
         <p className='title'>Chez vous, partout et ailleurs</p> : null}
       
    </div>
  )
}
export default BannerImg