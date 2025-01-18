import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

// Here we decide from tag key that which data we will fetch
const useGif = (tag) => {
    const [gif, setGif] = useState(" ");
    const [loader, setLoader] = useState("false");
  
    async function fetchData(tag) {
      setLoader(true);
      const { data } = await axios.get(tag?`${Url}&tag=${tag}`:Url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoader(false);
    }
  
    useEffect(() => {
      fetchData('car');
    }, [])

    return { gif, loader, fetchData};

}

export default useGif
