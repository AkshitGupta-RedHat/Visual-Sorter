import React from 'react';
import './bar.css';

 const Bar = (props) => {
     var { height} = props;
     var rr ="red";
    
     return(
         <div>
             <div className="bar container blue" style={{color:rr,height:height}}>{height}</div>
         </div>
     )
 }

 export default  Bar