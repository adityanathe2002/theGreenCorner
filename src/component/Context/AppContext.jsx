// import axios from 'axios'
// import React, { createContext, useEffect, useState } from 'react'


// export let plantContext = createContext();

// const AppContext = ({ children }) => {

//   let [allPlant, setPlant] = useState([])

//   useEffect(() => {
//     axios.get("http://116.75.62.44:8000/plants").then((resp) => {
//       setPlant(resp.data)
//       console.log(allPlant)
//     })
//   }, [])

//   return (
//     <plantContext.Provider value={{ allPlant }}>{children}</plantContext.Provider>
//   )
// }

// export default AppContext