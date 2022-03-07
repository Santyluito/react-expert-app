import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {

    getGifts(category)
      .then(imgs => {

        console.log(imgs)
        setState({
          data: imgs,
          loading: false
        })

      })

  }, [category]);

  /* setTimeout(() => {
    setState({
      data: [1, 2, 3, 4, 5, 6],
      loading: false
    })
}, 3000); */

  return state; // {data:[], loading:true}

}
