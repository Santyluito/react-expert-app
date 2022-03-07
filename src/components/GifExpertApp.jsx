import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  // const categories = ['One Punch', 'Sumarai X', 'Dragon Ball']
  const [categories, setCategories] = useState([
    "One Punch" /* , 'Sumarai X', 'Dragon Ball' */,
  ]);
  /* const handleAdd = () => {
    // setCategories([...categories, 'HunterXHonter'])
    setCategories(cats=>[...categories, 'HunterXhunter'])
  } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category, i) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
