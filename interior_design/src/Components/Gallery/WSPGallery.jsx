import React,{useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import  {GallertyContainer,ImageContainer} from './wsp-gallery'
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img18.jpg'
import img3 from '../../Images/img10.jpg'
import img4 from '../../Images/img14.jpg'
import img5 from '../../Images/img15.jpg'
import img6 from '../../Images/img16.jpg'
import img7 from '../../Images/img17.jpg'
import img8 from '../../Images/img18.jpg'
import img9 from '../../Images/img19.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9]

const Gallery = () => {
  const [data,setData] = useState({img:'',i:0})

  const viewImage = (img,i)=>{
    setData({img,i})
  }
  const imgAction=(action)=>{
    let i=data.i;
    setData({img:'',i:0});
  }

  return (
    <>
    <GallertyContainer id="gallery">
    {data.img &&
      <div style={{
        width:'100%',
        height: '100vh',
        background:'black',
        position: 'fixed',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
      }}>
        <button onClick={()=>imgAction()} style={{position: 'absolute',top:'5%',right:'5%'}}>X</button>
        <img src={data.img} style={{width:'auto',maxWidth:'90%',maxHeight:'90%',}} />
      </div>
    }
    <div style={{padding:'10px'}}>
    <ResponsiveMasonry
    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
    <Masonry gutter="20px">
        {images.map((image, i) => (
          <ImageContainer>
            <img
                key={i}
                src={image}
                style={{width: "100%", display: "block"}}
                alt=""
                onClick={()=>viewImage(image,i)}
                data-aos="zoom-in" />
            </ImageContainer>
        ))}
    </Masonry>
</ResponsiveMasonry>
</div>
    </GallertyContainer>
    </>
  )
}

export default Gallery