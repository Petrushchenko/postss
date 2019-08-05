import React from 'react';
import Form from './Form';

const filters = ["category", "subcategory", "rating", "budget", "delivery", "location"]

const Sidebar = () => (
  <div className="sidebar">
    <Form/>
  </div>
  )

export default Sidebar;

// <div class="filters__category">
//           Chose Category
//           <select class="chose">
//             <option value="0" selected disabled="disabled" hidden="hidden">Best Match</option>
//             <option value="1">category</option>
//           </select>
//         </div>
//         <div class="subcategory">
//           chose subcategory
//           <div>
//             <input type="checkbox" id="check1" name="all" /> 
//             <label for="check1">all subcategory</label>
//           </div>
//           <div>
//             <input type="checkbox" id="check2" name="data_entry" /> 
//             <label for="check2" >data entry <span>(1306)</span></label>
//           </div>
//           <div>
//             <input type="checkbox" id="check3" name="assistant" /> 
//             <label for="check3">personal assistant <span>(1907)</span></label>
//           </div>
//           <div>
//             <input type="checkbox" id="check4" name="research" /> 
//             <label for="check4">web research <span>(972)</span></label>
//           </div>
//           <div>
//             <input type="checkbox" id="check5" name="email" /> 
//             <label for="check5">email response handling <span>(80)</span></label>
//           </div>
//           <div>
//             <input type="checkbox" id="check6" name="transcription" /> 
//             <label for="check6">transcription <span>(307)</span></label>
//           </div>
//           <div>
//             <input type="checkbox" id="check7" name="other" /> 
//             <label for="check7">other - administrative support </label>
//           </div>
//         </div>
//         <div class="filters__client">
//           client rating
//           <div>
//             <input type="radio" id="r1" name="any" />
//             <label for="r1">any stars </label>
//           </div>
//           <div>
//             <input type="radio" id="r2" name="5" /> 
//             <label for="r2">5 stars <span>(930)</span></label>
//           </div>
//           <div>
//             <input type="radio" id="r3" name="4.5" /> 
//             <label for="r3">4.5 stars and Up <span>(2591)</span></label>
//           </div>
//           <div>
//             <input type="radio" id="r4" name="4" /> 
//             <label for="r4">4 stars and Up  <span>(1546)</span></label>
//           </div>
//           <div>
//             <input type="checkbox" id="check8" name="freelancer" /> 
//             <label for="check8">Include unrated freelancers <span>(1784)</span></label>
//           </div>
//         </div>
//         <div class="budget">
//           budget
//           <select class="chose">
//             <option value="0" selected disabled="disabled" hidden="hidden">Any budget</option>
//             <option value="1">budget</option>
//           </select>
//         </div>
//         <div class="delivry">
//           delivery
//           <select class="chose">
//             <option value="0" selected disabled="disabled" hidden="hidden">Any ..</option>
//             <option value="1">delivery</option>
//           </select>
//         </div>
//         <div class="location">
//           location
//           <select class="chose">
//             <option value="0" selected disabled="disabled" hidden="hidden">Any location</option >
//             <option value="1">Kiyv</option>
//           </select>
//         </div>
//         <form class="request">
//           enter username
//           <input type="text" name="username" placeholder="username" />
//           <input type="submit" value="ok" />
//         </form>