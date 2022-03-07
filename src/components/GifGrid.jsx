// import React, { /* useEffect, useState */ } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifts } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  // const [count, setCount] = useState(0)
  // const [images, setImages] = useState([]);

  const {data: images, loading} = useFetchGifs();

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className="animate__animated animate__flash">Cargando...</p>}

      
      <div className="card-grid">

        {
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }

      </div>
        {/* <h4> {count} </h4> */}
        {/* <button onClick={() => setCount(count+1)}></button> */}
    </>
  );
};

export default GifGrid;
