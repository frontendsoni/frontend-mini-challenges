
import { useState } from 'react'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'


const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleClick = (image) => {
     return setSelectedImage(image)
  }

  return (
    <div className='mt-10 mx-auto'>
      <p className="text-center underline">Click on an image</p>
      <div className='img_container flex justify-center items-center gap-x-4 mt-7'>
        <div className="img_wrapper"  onClick={() => handleClick(img1)}>
          <img src={img1} alt="image" />
        </div>
        <div className="img_wrapper" onClick={() => handleClick(img2)}>
          <img src={img2} alt="image" />
        </div>
        <div className="img_wrapper" onClick={() => handleClick(img3)}>
          <img src={img3} alt="image" />
        </div>
      </div>
      {selectedImage && <div className="selected_image mt-10">
        <h3 className='text-center text-base font-medium uppercase tracking-wide underline mb-10'>Selected Image</h3>
        <img src={selectedImage} alt="image" />
      </div>}
    </div>
  )
}

export default ImageGallery