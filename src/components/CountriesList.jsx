import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountrisList() {
  const [counList, setCounList] = useState(null);

  useEffect(() => {
    getCountrisList();
  }, []);

  const getCountrisList = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries`
      );

      const responseJSON = await response.json()
    
      setCounList(responseJSON.results)
    } catch (err) {
     
    }
  }

  if (counList === null) {
    return <h1>....Loading</h1>;
  }

  return 

//   <div>
    
 

//   {counList.map((eachCountry) => {

//     return (

//       <Link key={eachCountry.alpha3Code}>to={$(eachCountry.alpha3Code}`</Link>
      
        
//     )
//   })}

// </div>


}

export default CountrisList;
