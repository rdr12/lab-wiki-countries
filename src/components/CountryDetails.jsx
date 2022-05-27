import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"



function CountryDet() {

    const [ countryDetalles, setCountryDetalles] = useState(null)

    const { countryNm } = useParams()

    const getCountryDetalles = async () => {
        setCountryDetalles(null)
        try {
          const response = await axios.get(
            `https://ih-countries-api.herokuapp.com/countries/$(country)`
          );
    
          setCountryDetalles(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getCountryDetalles();
      }, [countryNm]);

      if (countryDetalles === null) {
        return <h1>....Loading</h1>;
      }
    
      return (

//         <div class="container">
//         <!-- Bootstrap row wrapper div -->
//         <div class="row">
//           <!-- Countries List (Bootstrap column) -->
//           <div class="col-5" style="max-height: 90vh; overflow: scroll">
//             <div class="list-group">
//               <a class="list-group-item list-group-item-action" href="/ABW"
//                 >🇦🇼 Aruba</a
//               >
//               <a class="list-group-item list-group-item-action" href="/AFG"
//                 >🇦🇫 Afghanistan</a
//               >
//               <a class="list-group-item list-group-item-action" href="/AGO"
//                 >🇦🇴 Angola</a
//               >
//               <a class="list-group-item list-group-item-action" href="/AIA"
//                 >🇦🇮 Anguilla</a
//               >
//               <a class="list-group-item list-group-item-action" href="/ALA"
//                 >🇦🇽 Åland Islands</a
//               >
//               <a class="list-group-item list-group-item-action" href="/ALB"
//                 >🇦🇱 Albania</a
//               >
//               <a class="list-group-item list-group-item-action" href="/AND"
//                 >🇦🇩 Andorra</a
//               >
//               <a class="list-group-item list-group-item-action" href="/ARE"
//                 >🇦🇪 United Arab Emirates</a
//               >
//               <a class="list-group-item list-group-item-action" href="/ARG"
//                 >🇦🇷 Argentina</a
//               >
//               <a class="list-group-item list-group-item-action" href="/ARM"
//                 >🇦🇲 Armenia</a
//               >
//               <a class="list-group-item list-group-item-action" href="/ASM"
//                 >🇦🇸 American Samoa</a
//               >
//               <a class="list-group-item list-group-item-action" href="/ATA"
//                 >🇦🇶 Antarctica</a
//               >
//               <a class="list-group-item list-group-item-action" href="/FLK"
//                 >🇫🇰 Falkland Islands</a
//               >
//               <a
//                 class="list-group-item list-group-item-action active"
//                 href="/FRA"
//                 >🇫🇷 France</a
//               >
//               <a class="list-group-item list-group-item-action" href="/ZWE"
//                 >🇿🇼 Zimbabwe</a
//               >
//             </div>
//           </div>

//           <!-- Country Details (Bootstrap column) -->
//           <div class="col-7">
//             <h1>France</h1>
//             <table class="table">
//               <thead></thead>
//               <tbody>
//                 <tr>
//                   <td style="width: 30%">Capital</td>
//                   <td>Paris</td>
//                 </tr>
//                 <tr>
//                   <td>Area</td>
//                   <td>
//                     551695 km
//                     <sup>2</sup>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Borders</td>
//                   <td>
//                     <ul>
//                       <li><a href="/AND">Andorra</a></li>
//                       <li><a href="/BEL">Belgium</a></li>
//                       <li><a href="/DEU">Germany</a></li>
//                       <li><a href="/ITA">Italy</a></li>
//                       <li><a href="/LUX">Luxembourg</a></li>
//                       <li><a href="/MCO">Monaco</a></li>
//                       <li><a href="/ESP">Spain</a></li>
//                       <li><a href="/CHE">Switzerland</a></li>
//                     </ul>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>

//       )

// }

export default CountryDet;