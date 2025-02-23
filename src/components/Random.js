import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState(" ");
  // const [loader, setLoader] = useState("false");

  // async function fetchData() {
  //   setLoader(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoader(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])

  const {gif, loader, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex
    flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

      {
       loader?(<Spinner />):(<img src={gif} width="350" />
       )
      }
      
      <button onClick={() => fetchData()}
        className='w-10/12 bg-slate-200 text-lg py-2 rounded-lg'>
        Generate
      </button>
    </div>
  )
}

export default Random
