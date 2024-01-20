import React, { useEffect, useState } from "react";
import "./Video.css";
import ReactPlayer from 'react-player';

const BASE_URL = "https://pixabay.com/api/videos/";
const API_KEY = "41907257-9a907ec007c8651dcf22e20e6";

const Video = () => {
  //hooks
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const debouncedFunction = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      clearTimeout(debouncedFunction);
    };
  }, [query]);

  //functions
  const handleSearch=(e)=>{
    setQuery(e.target.value)
  }

  async function fetchData(){
    setLoading(true)
    try{
      const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}`)
      const result = await response.json();
      setVideos(result.hits);
      setLoading(false);
    }
    catch(error){
      alert(error);
      setLoading(false);
    }
  }
  console.log(videos,"videos");
  return (
    <div className="d">
      <header className="head">
        <h1 className="h">Stunning free stock video footage & clips</h1>
        <input type="text" value={query} onChange={handleSearch} placeholder="Search for images"
        ></input>
      </header>
      <br></br>
      <div className="video-grid">
        {loading ? <span>Loading...</span>: videos.length && videos?.map((video)=>{
          return(
            <div className="video">
              <h3>Tags: {video.tags}</h3>
              <ReactPlayer
            url={video.videos.tiny.url}
            width={video.videos.tiny.width}
            height={video.videos.tiny.height}
            controls={true}
          />

            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Video;
