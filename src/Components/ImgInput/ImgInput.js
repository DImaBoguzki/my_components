import React,{ useState, useEffect } from 'react';

import imgUpload from '../../assest/icons/upload.svg';

function ImgInput(props){
  const [img, setImg] = useState(null);
  const [imgPreviewUrl, setImgPreviewUrl] = useState('');

  const handleImageChange = (e) => setImg(e.target.files[0]);

  useEffect(()=>{
    if(img!==undefined && img!==null){
      let reader = new FileReader();
      reader.readAsDataURL(img)
      reader.onloadend = () => {
        // set state img of component
        setImgPreviewUrl(reader.result);
      }
    }
    else {
      setImgPreviewUrl('');
      setImg(null);
    }
  },[img])

  return(
      <div className='img-input-dima'>
        <img className="upload-icon" src={imgUpload} alt="upload-img"/>
        {imgPreviewUrl!=='' ?<img className="upload-img" src={imgPreviewUrl} alt="upload-img"/> : null}
        <input type="file" onChange={handleImageChange}/>
      </div>
  )
}
export default ImgInput;