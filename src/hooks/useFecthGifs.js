import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, SetisLoading] = useState(true)

    const getImages = async() =>{
      const newImages = await getGifs(category);
      setImages(newImages);
      SetisLoading(false);
    }
      
      useEffect(() =>{
        getImages();
      }, []);


  return {
    images,
    isLoading

  }
}
